class LocalStorageService {
  getItem(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
  clear() {
    localStorage.clear();
  }
  removeItem(key: string) {
    const item = this.getItem(key);
    if (item) {
      localStorage.removeItem(key);
    }
  }
  setItem(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }
}

export default new LocalStorageService();
