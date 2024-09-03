class GroupStorage {
  static #STORAGE_KEY = 'groups';
  static #DEFAULT_VALUE = '{}';
  static #value = GroupStorage.#getFromStorage();
  static #getFromStorage() {
    return JSON.parse(
      localStorage.getItem(this.#STORAGE_KEY) || this.#DEFAULT_VALUE,
    );
  }
  static #saveToStorage() {
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.#value));
  }

  static getList() {
    return Object.values(this.#value);
  }
  static getFirstValue() {
    const list = this.getList();
    return list.length !== 0 ? list[0].value : '';
  }
  static create(item) {
    const id = Date.now().toString();
    this.#value[id] = { id, value: item };
    this.#saveToStorage();
    return id;
  }
  static remove(id) {
    delete this.#value[id];
    this.#saveToStorage();
  }
}

export default GroupStorage;
