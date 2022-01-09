/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { attachRouter } from '../router/index.js';

@customElement('app-index')
export class AppIndex extends LitElement {
  @query('main')
  private main!: HTMLElement;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    main,
    main > * {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    main:empty ~ footer {
      display: none;
    }
  `;

  render() {
    return html` <main role="main"></main> `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}
