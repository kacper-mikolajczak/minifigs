import i18n from 'i18n';

describe('i18n tests', () => {
  it('returns default value if key is non-existent', () => {
    const test = i18n.t('', {defaultValue: 'OK'});

    expect(test).toEqual('OK');
  });
});
