class GroupStorage {
  static #STORAGE_KEY = 'groups';
  static #DEFAULT_VALUE = `{
      "1":{"id":"1","value":"가족"},
      "2":{"id":"2","value":"친구"},
      "3":{"id":"3","value":"직장"},
      "4":{"id":"4","value":"스터디"}
    }`;
  static #value = GroupStorage.#getFromStorage();
  static #getFromStorage() {
    const value = JSON.parse(
      localStorage.getItem(this.#STORAGE_KEY) || this.#DEFAULT_VALUE,
    );
    this.#saveToStorage(value);
    return value;
  }
  static #saveToStorage(value = this.#value) {
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(value));
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
