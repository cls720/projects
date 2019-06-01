import Disposable from './disposable'
import Model from './model'

export default class ModelManager {
  constructor() {
    this.disposable = new Disposable()
    this.models = new Map()
  }

  hasCachedModel(key) {
    return this.models.has(key)
  }

  getModel(key) {
    return this.models.get(key)
  }

  addModel(text, uri) {
    if (this.hasCachedModel(uri)) {
      return this.getModel(uri)
    }

    const model = new Model(text, uri)
    this.models.set(uri, model)
    this.disposable.add(model)

    return model
  }

  dispose() {
    // dispose of all the models
    this.disposable.dispose()
    this.models.clear()
  }
}



// WEBPACK FOOTER //
// ./src/components/Editor/models/manager.js