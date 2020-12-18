import {MyElement} from '../sinpapeles-profile.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('sinpapeles-profile', () => {
  test('is defined', () => {
    const el = document.createElement('sinpapeles-profile');
    assert.instanceOf(el, MyElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<sinpapeles-profile></sinpapeles-profile>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(
      html`<sinpapeles-profile name="Test"></sinpapeles-profile>`
    );
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<sinpapeles-profile></sinpapeles-profile>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
