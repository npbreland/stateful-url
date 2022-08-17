class StatefulURL {

  setState(params) {
    let newURL = window.location.pathname;
    if (params && params.entries().next().done === false) {
      newURL += '?' + params;
    }
    window.history.replaceState({}, '', newURL);
  }

  set(name, value) {
    const params = new URLSearchParams(location.search);
    params.set(name, value);
    this.setState(params);
  }

  get(name) {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  }

  delete(name) {
    const params = new URLSearchParams(location.search);
    params.delete(name);
    this.setState(params);
  }

  clear() {
    this.setState(null);
  }

};
