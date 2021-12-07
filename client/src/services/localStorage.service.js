class LocalStorageService {
  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key, { parsed = false } = {}) {
    if (parsed) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return this.localStorage.getItem(key);
  }

  set(key, value, { parsed = false } = {}) {
    if (parsed) {
      return this.localStorage.setItem(key, JSON.stringify(value));
    }
    return this.localStorage.setItem(key, value);
  }
}
export default new LocalStorageService();
