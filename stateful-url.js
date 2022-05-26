const StatefulURL = {

  updateParam: (name, value) => {
    const params = new URLSearchParams(location.search);
    params.set(name, value);
    const newURL = `${window.location.pathname}?${params}`;
    window.history.replaceState({}, '', newURL);
  },

  getParam: (name) => {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  },

  clearParams: () => {
    window.history.replaceState({}, '', window.location.pathname);
  }

};
