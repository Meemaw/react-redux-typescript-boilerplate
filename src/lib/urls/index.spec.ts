import { injectParameters } from '.';

describe('urls', () => {
  it('injectParameters_removesColon_onEmptyData', () => {
    const oauthUrl = 'https://example.com/oauth/users/:userId';
    expect(injectParameters(oauthUrl, {})).toBe('https://example.com/oauth/users/userId');
  });

  it('injectParameters_doesntMutatePassedData', () => {
    const oauthUrl = 'https://example.com/oauth/users/:userId';
    const data = { userId: 'mutateTest' };
    expect(injectParameters(oauthUrl, data)).toBe('https://example.com/oauth/users/mutateTest');
    expect(data).toEqual({ userId: 'mutateTest' });
  });

  it('injectParameters_injectsOneParams', () => {
    const oauthUrl = 'https://example.com/oauth/users/:userId';
    expect(injectParameters(oauthUrl, { userId: 'superId' })).toBe(
      'https://example.com/oauth/users/superId',
    );
  });

  it('injectParameters_injectsMultipleParams', () => {
    const oauthUrl = 'https://example.com/oauth/users/:userId/:sessionId';
    expect(injectParameters(oauthUrl, { userId: 'superId', sessionId: 'megaId' })).toBe(
      'https://example.com/oauth/users/superId/megaId',
    );
  });

  it('injectParameters_removesColon_onNoMatchingData', () => {
    const oauthUrl = 'https://example.com/oauth/users/:userId/:sessionId';
    expect(injectParameters(oauthUrl, { other: 'test' })).toBe(
      'https://example.com/oauth/users/userId/sessionId',
    );
  });

  it('injectParameters_insertsQueryParams_onNoBodyRequest', () => {
    const hasBody = false;
    const oauthUrl = 'https://example.com/oauth/users';
    expect(injectParameters(oauthUrl, { a: 'b' }, hasBody)).toBe(
      'https://example.com/oauth/users?a=b',
    );
  });

  it('injectParameters_injectsVersionToSubPath', () => {
    const coinmarketcapUrl = 'https://api.coinmarketcap.com/v:version/ticker/';
    expect(injectParameters(coinmarketcapUrl, { version: '1' })).toBe(
      'https://api.coinmarketcap.com/v1/ticker/',
    );
  });
});
