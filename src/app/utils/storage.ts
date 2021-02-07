const storage = {
  get(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  set(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default storage;
