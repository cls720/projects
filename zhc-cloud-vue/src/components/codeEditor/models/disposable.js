export default class Disposable {
    constructor() {
      this.disposers = new Set();
    }
  
    add(...disposers) {
      disposers.forEach(disposer => this.disposers.add(disposer));
    }
  
    dispose() {
      this.disposers.forEach(disposer => disposer.dispose());
      this.disposers.clear();
    }
  }
  
  
  
  // WEBPACK FOOTER //
  // ./src/components/Editor/models/disposable.js