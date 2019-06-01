import { editor as monacoEditor, KeyCode, KeyMod } from 'monaco-editor'
import eventhub from './eventhub.js'
import { debounce } from 'lodash'
import ModelManager from './models/manager'
import Model from './models/model'
import Disposable from './models/disposable'
import keymap from './keymap.js'
// import Store from '@ide/store'
import themes from './themes'

let modelManager = new ModelManager()

const defaultEditorOptions = {
  model: null,
  readOnly: false,
  contextmenu: true,
  scrollBeyondLastLine: true,
  theme: 'vs',
  wordWrap: 'on',
}

const defaultDiffOptions = ({ readOnly }) => {
  return {
    quickSuggestions: false,
    occurrencesHighlight: false,
    readOnly,
    hideCursorInOverviewRuler: !readOnly,
    minimap: {
      enabled: false,
    }
  }
}

export default class Editor {
  constructor(el, {
    uri,
    originalText,
    modifiedText,
    options,
    originalCache = true,
    modifiedCache = true
  }) {
    this.el = el
    this.uri = uri
    this.originalText = originalText
    this.modifiedText = modifiedText
    this.originalCache = originalCache
    this.modifiedCache = modifiedCache && options.readOnly !== true
    this.eventDisposable = new Disposable()
    this.noCacheDisposable = new Disposable()

    this.setupThemes()

    if (originalText && modifiedText) {
      this.isDiffEditorType = true
    } else {
      this.isDiffEditorType = false
    }
    this.options = {
      renderLineHighlight: options.readOnly ? 'none' : 'all',
      ...defaultEditorOptions,
      ...options
    }
    this.editor = null
    this.debouncedUpdate = debounce(() => {
      this.updateDimensions();
    }, 200)
    this.debouncedPositionCallback = debounce((e, cb) => {
      cb(e)
    }, 200)
    this.debouncedContentCallback = debounce((e, cb, value) => {
      cb(e, value)
    }, 200)
  }

  // 类实例属性，共用 cacheModel
  modelManager = modelManager

  createModel() {
    if (this.isDiffEditorType) {
      if (this.originalCache) {
        this.originalModel = this.modelManager.addModel(this.originalText, `original/${this.uri}`)
      } else {
        this.originalModel = new Model(this.originalText, `no-cache/original/${this.uri}`)
        this.noCacheDisposable.add(this.originalModel)
      }
    }

    if (this.modifiedCache) {
      this.modifiedModel = this.modelManager.addModel(this.modifiedText, this.uri)
    } else {
      this.modifiedModel = new Model(this.modifiedText, `no-cache/${this.uri}`)
      this.noCacheDisposable.add(this.modifiedModel)
    }
  }

  createEditor() {
    this.createModel()

    if (this.isDiffEditorType) {
      this.editor = monacoEditor.createDiffEditor(this.el, {
        ...defaultDiffOptions(this.options),
        ...this.options
      })
      this.editor.setModel({
        original: this.originalModel.getModel(),
        modified: this.modifiedModel.getModel()
      })
    } else {
      this.editor = monacoEditor.create(this.el, this.options)
      this.editor.setModel(this.modifiedModel.getModel())
    }
    this.addCommands()
    window.addEventListener('resize', this.debouncedUpdate, false)
    eventhub.$on('window-resize', this.debouncedUpdate)
  }

  // 设置编辑器 layout
  updateDimensions() {
    this.instance.layout()
  }

  setupThemes() {
    Object.keys(themes).forEach(name => {
      monacoEditor.defineTheme(name, themes[name])
    })
  }

  addCommands() {
    var me = this;
    const getKeyCode = key => {
      const monacoKeyMod =
        key === 'Alt'
        || key === 'Shift'
        || key === 'CtrlCmd'
        || key === 'WinCtrl'

      return monacoKeyMod ? KeyMod[key] : KeyCode[key]
    }
    let instance = this.instance

    keymap.forEach(command => {
      const keybindings = command.bindings.map(binding => {
        const keys = binding.split('+');

        // eslint-disable-next-line no-bitwise
        return keys.length > 1 ? getKeyCode(keys[0]) | getKeyCode(keys[1]) : getKeyCode(keys[0]);
      })

      instance.addAction({
        id: command.id,
        label: command.label,
        keybindings,
        run() {
          if (command.action.inStore) {
            // Store.dispatch(command.action.name, { instance })
          } else {
            eventhub.$emit(command.action.name, me, this)
          }
          return null;
        },
      });
    });
  }
  find(content){
    let instance = this.instance;
    return instance.getModel().findMatches(content)
  }
  setPosition(lineNumber, column) {
    let position = new monaco.Position(lineNumber, column);
    let instance = this.instance;
    instance.focus();
    instance.setPosition(position)
    instance.revealLineInCenter(position.lineNumber);
  }
  //在内容最后插入内容
  insertContentAtLast(text) {
    let instance = this.instance;
    let val = instance.getValue();
    instance.setValue(val + text)
  }
  //插入内容到选中处
  insertContentAtSelection(text) {

    let instance = this.instance
    let selection = instance.getSelection();


    this.editor.executeEdits('log-source', [{
      identifier: 'event_id',
      range: new monaco.Range(selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn),
      text: text,
      forceMoveMarkers: true
    }]);

    return;


    let val = instance.getValue(), valLines = [], valChars = [];
    if (val) {
      valChars = val.split("")
      valLines = val.split("\n")
    }

    let startIndex = selection.startColumn - 1, len = 0, strartLine = selection.startLineNumber - 1, endLineNumber = selection.endLineNumber - 1;
    for (let i = 0; i < strartLine; i++) {
      startIndex = startIndex + valLines[i].length + 1;
    }
    while (strartLine < endLineNumber) {
      len = len + valLines[strartLine].length + 1;
      strartLine++
    }

    valChars.splice(startIndex, len + selection.endColumn - selection.startColumn, text)
    instance.setValue(valChars.join(""))
  }
  set value(value) {
    this.modifiedModel.setValue(value)
  }

  get position() {
    return this.instance.getPosition()
  }

  set position(position) {
    this.instance.setPosition(position)
    this.instance.revealLineInCenter(position.lineNumber);
  }

  get instance() {
    return this.editor
  }

  get language() {
    return this.modifiedModel.language || null
  }

  get eol() {
    return this.modifiedModel.eol || null
  }

  // 添加编辑器内容变更回调
  onContentChange(cb) {
    let model = this.modifiedModel.model

    this.eventDisposable.add(model.onDidChangeContent(e => {
      this.debouncedContentCallback(e, cb, model.getValue())
    }))
  }

  // 添加编辑器位置变更回调
  onPositionChange(cb) {
    if (this.instance.onDidChangeCursorPosition) {
      this.eventDisposable.add(this.instance.onDidChangeCursorPosition(e => {
        this.debouncedPositionCallback(e, cb)
      }))
    }
  }

  // 清除编辑器相关事件或实例
  dispose() {
    window.removeEventListener('resize', this.debouncedUpdate)
    eventhub.$off('window-resize', this.debouncedUpdate)

    this.instance && this.instance.dispose()
    this.eventDisposable.dispose()
    this.noCacheDisposable.dispose()
  }
}


// WEBPACK FOOTER //
// ./src/components/Editor/editor.js