import api from '.';

const { GET, POST, DELETE, PUT, PATCH } = api;

describe('api', () => {
  it('api_exportsHttpFunctions', () => {
    expect(typeof GET('')).toBe('function');
    expect(typeof POST('')).toBe('function');
    expect(typeof DELETE('')).toBe('function');
    expect(typeof PUT('')).toBe('function');
    expect(typeof PATCH('')).toBe('function');
  });
});
