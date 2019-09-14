import '@testing-library/jest-dom/extend-expect';

const globalAny: any = global;

const originalConsoleError = console.error;

console.error = (message: string) => {
  originalConsoleError(message);

  if (String(message).indexOf('SyntaxError: ') >= 0) {
    throw new Error(message);
  }
  if (String(message).indexOf('ECONNREFUSED') >= 0) {
    throw new Error(message);
  }
};
