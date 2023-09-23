class LocalStorageService {
  localStorage: Storage;
  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string) {
    return JSON.parse(this.localStorage.getItem(key) as unknown as string);
  }

  set(key: string, value: unknown) {
    return this.localStorage.setItem(key, JSON.stringify(value));
  }
}
export default new LocalStorageService();
