class ContactListStorage {
  static #STORAGE_KEY = 'contactList';
  static #DEFAULT_VALUE = '{}';
  static #value = this.#getFromStorage();
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
  static getById(id) {
    return this.#value[id];
  }
  static create(item) {
    const id = Date.now().toString();
    this.#value[id] = { id, ...item };
    this.#saveToStorage();
    return id;
  }
  static remove(id) {
    delete this.#value[id];
    this.#saveToStorage();
  }
}

export default ContactListStorage;
