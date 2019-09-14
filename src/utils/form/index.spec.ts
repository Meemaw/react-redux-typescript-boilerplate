import { toFormData } from '../form';

describe('form', () => {
  it('toFormData_returnsFormData', () => {
    expect(toFormData({})).toEqual(new FormData());
  });
});
