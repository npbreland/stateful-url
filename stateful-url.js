export default class StatefulURL extends URLSearchParams {

  constructor(init) {
    super(init);
  }

  setState() {
    const path = window.location.pathname;
    if (this.entries().next().done === true) {
      window.history.replaceState({}, '', path);
    } else {
      window.history.replaceState({}, '', path + '?' + this);
    }
  }

  set(name, value) {
    super.set(name, value);
    this.setState();
  }

  delete(name) {
    super.delete(name);
    this.setState();
  }

  clear() {
    const keys = [ ...this.keys() ];
    for (let key of keys) {
      this.delete(key);
    }
  }

};
