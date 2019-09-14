import { toFormData } from '.';

describe('form', () => {
  it('toFormData_returnsFormData', () => {
    expect(toFormData({})).toEqual(new FormData());
  });
});
