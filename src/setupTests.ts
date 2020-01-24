/* eslint-disable no-console */
import '@testing-library/jest-dom/extend-expect';

const originalConsoleError = console.error;

// Throw Error if any of those occurs during unit tests
const THROWING_MESSAGES = ['SyntaxError:', 'ECONNREFUSED'];

console.error = (message: string) => {
  originalConsoleError(message);

  if (THROWING_MESSAGES.includes(String(message))) {
    throw new Error(message);
  }
};
