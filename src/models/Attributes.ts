export class Attributes<T> {
  constructor(private data: T) {}

  // advanced generic constraints
  // getting the type of a object
  // K is one of the keys of T
  // arrow func fix the error of the this keyword
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
