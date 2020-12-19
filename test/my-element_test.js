import {Profile, getLink} from '../sinpapeles-profile.js';

const assert = chai.assert;

suite('sinpapeles-profile', () => {
  test('is defined', () => {
    const el = document.createElement('sinpapeles-profile');
    assert.instanceOf(el, Profile);
  });
});

suite('getLink', () => {
  test('valid url', () => {
    assert(getLink('https://example.com').toString() === 'https://example.com');
    assert(getLink('tel:123123123').toString() === 'tel:123123123');
    assert(
      getLink('mailto:user@example.com').toString() ===
        'mailto:user@example.com'
    );
  });

  test('No protocol', () => {
    assert(getLink('example.com').toString() === 'http://example.com/');
  });

  test('Email', () => {
    assert(
      getLink('user@example.com').toString() === 'mailto:user@example.com'
    );
  });

  test('Phone', () => {
    assert(getLink('123456789').toString() === 'tel:123456789');
  });

  test('Empty', () => {
    assert.isEmpty(getLink(''));
  });
});
