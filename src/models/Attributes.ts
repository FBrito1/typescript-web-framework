export class Attributes<T> {
  constructor(private data: T) {}

  // advanced generic constraints
  // getting the type of a object
  // K is one of the keys of T
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
