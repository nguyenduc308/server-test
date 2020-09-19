class CookieService {
  setItem(key: string, value: string, expires?: number): void {
    let now = new Date();
    if (expires) {
      now.setTime(expires);
    }
    document.cookie = `${key}=${value || ''}`;
  }

  removeItem(key: string, path?: string, domain?: string): void {
    if (this.getItem(key)) {
      document.cookie = key + '=;';
    }
  }

  clear(): void {
    document.cookie = '';
  }

  getItem(key: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${key}=`);
    if (parts && parts.length === 2) {
      const str = parts.pop();
      if (str) {
        return str.split(',').shift();
      }
    }

    return null;
  }
}

export default new CookieService();
