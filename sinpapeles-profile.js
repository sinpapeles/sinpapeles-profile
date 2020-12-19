/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';

function parseUrl(link) {
  try {
    return new URL(link);
  } catch (e) {
    return '';
  }
}

const getLink = (link) => {
  const tel = /^[\d+ -]+$/;
  return parseUrl(link) || link.includes('@')
    ? parseUrl(`mailto:${link}`)
    : tel.test(link)
    ? parseUrl(`tel:${link.replace(/[^\d+]/g, '')}`)
    : parseUrl(`${window.location.protocol}//${link}`);
};

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Profile extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        overflow: auto;
      }

      :host .profile {
        box-sizing: border-box;
        margin: 0 auto;
        max-width: 400px;
        height: 100%;
        padding: 80px 20px 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }

      :host .rounded-circle {
        border-radius: 50% !important;
      }
      :host .img-thumbnail {
        padding: 0.25rem;
        border: 1px solid;
        border-radius: 0.25rem;
        max-width: 100%;
        height: auto;
      }
      :host .img-fluid {
        max-width: 100%;
        height: auto;
        max-height: 250px;
      }

      :host .bio {
        margin: 0 auto;
        padding: 20px;
        white-space: pre-wrap;
      }
      :host .links {
        margin: 0 auto;
      }

      :host .link {
        margin: 10px 0;
      }

      :host .link a {
        display: inline-block;
        width: 100%;
        padding: 20px 0;
        border: 1px solid;
        text-decoration: none;
        font-size: 1.2rem;
      }

      :host .footer {
        display: inline-block;
        margin-top: 40px;
        padding-bottom: 10px;
      }
      :host .footer .text {
        font-family: sans-serif;
        font-size: 0.8rem;
      }
    `;
  }

  static get properties() {
    return {
      data: {type: Object},
      openNewPage: {type: Boolean},
    };
  }

  constructor() {
    super();
  }

  renderImage() {
    const {image} = this.data;

    if (!image.show) {
      return '';
    }

    const styles = ['img-fluid'];

    if (image.border) {
      styles.push('img-thumbnail');
    }
    if (image.circle) {
      styles.push('rounded-circle');
    }

    return html`
      <div class="image">
        <img src="${image.src}" class="${styles.join(' ')}" alt="profile" />
      </div>
    `;
  }

  renderTitle() {
    const {title} = this.data;

    if (!title.show) {
      return '';
    }

    return html`
      <div class="title">
        <h1>${title.text}</h1>
      </div>
    `;
  }

  renderBio() {
    const {bio} = this.data;

    if (!bio.show) {
      return '';
    }

    return html`<div class="bio">${bio.text}</div>`;
  }

  renderLink(link) {
    const {color} = this.data.theme;

    const target = this.openNewPage ? '_blank' : '_self';
    const href = getLink(link.href);

    return html`
      <div class="link">
        <a
          href="${href}"
          target="${target}"
          rel="noopener noreferrer"
          style="color: ${color}"
          >${link.text}</a
        >
      </div>
    `;
  }

  renderLinks() {
    const {links} = this.data;

    const content = Object.values(links)
      .filter(({show}) => show)
      .map((link) => this.renderLink(link));

    return html` <div class="links">${content}</div> `;
  }

  renderFooter() {
    return html`
    <div class="footer">
      <div class="text">
      Truly decentralized.
      </div>
    </div>
  </div>`;
  }

  render() {
    const {theme} = this.data;
    const {url} = theme.font;

    return html`
      <link href="${url}" rel="stylesheet" />
      <style>
        :host {
          background: ${theme.background};
          color: ${theme.color};
        }
        :host .profile {
          font-family: '${theme.font.family}', sans-serif;
        }
      </style>
      <div class="profile">
        <div class="body">
          ${this.renderImage()} ${this.renderTitle()} ${this.renderBio()}
          ${this.renderLinks()}
        </div>
        ${this.renderFooter()}
      </div>
    `;
  }
}

window.customElements.define('sinpapeles-profile', Profile);
