import { editor as monacoEditor, Uri } from 'monaco-editor'
import languagesMap from './languages-map.js';

export default class Model {
  constructor(text, uri) {
    let language = this.getMapLanguageByUri(uri)

    this.text = text
    this.model = monacoEditor.createModel(
      text,
      language ? language : null,
      // language ? null : new Uri(false, false, uri)
    )
  }

  getMapLanguageByUri(uri) {
    let language = null
    let ext = `${uri}`.split('.')

    if (ext.length >= 2) {
      ext = ext[ext.length - 1]
    } else {
      ext = null
    }

    if (ext) {
      language = languagesMap[ext] || "javascript"
    }

    return language
  }

  get uri() {
    return this.model.uri.toString()
  }

  get language() {
    return this.model.getModeId()
  }

  get eol() {
    return this.model.getEOL() === '\n' ? 'LF' : 'CRLF'
  }

  getModel() {
    return this.model
  }

  setValue(value) {
    this.model.setValue(value)
  }

  dispose() {
    this.model.dispose()
  }
}



// WEBPACK FOOTER //
// ./src/components/Editor/models/model.js