import 'raf/polyfill';

import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

const globalAny: any = global;

globalAny.enzyme = enzyme;

// Fail tests on any warning
console.error = (message: any) => {
  console.log(message);
  throw new Error(message);
};

class LocalStorageMock {
  store: object;

  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: any) {
    this.store[key] = value.toString();
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

globalAny.localStorage = new LocalStorageMock();
