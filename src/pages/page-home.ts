/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import config from '../config.js';
import { PageElement } from '../helpers/page-element.js';
import {
  codepen,
  github,
  instagram,
  stackoverflow,
  telegram,
} from '../icons.js';

@customElement('page-home')
export class PageHome extends PageElement {
  static styles = css`
    section {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      min-height: 100%;
      padding: 1rem;
    }

    section::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -2;
      background-image: url('/images/profile.jpg');
      background-position: bottom;
      background-size: cover;
      background-repeat: no-repeat;
    }

    section::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background-color: #fff4;
      backdrop-filter: blur(40px);
    }

    .profile-img {
      overflow: hidden;
      width: 200px;
      height: 200px;
      margin-bottom: 30px;
      border-radius: 50%;
      transition: transform 500ms 400ms ease;
      animation: pulse 1.5s 1s ease infinite;
    }

    .profile-img:hover {
      transform: scale(1.1);
    }

    .profile-img > img {
      width: 100%;
      height: 100%;
      transition: transform 500ms 500ms ease;
    }

    .profile-img:hover > img {
      transform: scale(1.2);
    }

    .profile-name {
      margin: 0;
      margin-bottom: 8px;
      color: #fff;
      font-weight: 100;
      font-size: 1.75rem;
      font-family: 'Varela Round', sans-serif;
      text-align: center;
      text-transform: capitalize;
      mix-blend-mode: hard-light;
    }

    .job-name {
      margin: 0;
      margin-bottom: 6px;
      color: #fff;
      font-weight: 100;
      font-size: 1rem;
      font-family: 'Varela Round', sans-serif;
      text-align: center;
      text-transform: capitalize;
      mix-blend-mode: hard-light;
    }

    .socials {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .social {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      width: 42px;
      height: 42px;
      margin: 16px;
      border-radius: 50%;
      box-shadow: 8px 8px 32px 0 #0002, inset 8px -8px 12px 0 #0003;
    }

    .social.github {
      background-color: #333;
    }

    .social.codepen {
      background-color: #434a54;
    }

    .social.telegram {
      background-color: #08c;
    }

    .social.instagram {
      background: radial-gradient(
          circle farthest-corner at 35% 90%,
          #fec564,
          transparent 50%
        ),
        radial-gradient(
          circle farthest-corner at 0 140%,
          #fec564,
          transparent 50%
        ),
        radial-gradient(
          ellipse farthest-corner at 0 -25%,
          #5258cf,
          transparent 50%
        ),
        radial-gradient(
          ellipse farthest-corner at 20% -50%,
          #5258cf,
          transparent 50%
        ),
        radial-gradient(
          ellipse farthest-corner at 100% 0,
          #893dc2,
          transparent 50%
        ),
        radial-gradient(
          ellipse farthest-corner at 60% -20%,
          #893dc2,
          transparent 50%
        ),
        radial-gradient(
          ellipse farthest-corner at 100% 100%,
          #d9317a,
          transparent
        ),
        linear-gradient(
          #6559ca,
          #bc318f 30%,
          #e33f5f 50%,
          #f77638 70%,
          #fec66d 100%
        );
    }

    .social.instagram > box-icons {
      width: 1.5rem;
      height: 1.5rem;
    }

    .social.stackoverflow {
      background-color: #f48024;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 #8800d6;
      }

      50% {
        box-shadow: 0 0 5px 20px #fff4;
      }

      100% {
        box-shadow: 0 0 15px 50px #fff0;
      }
    }
  `;

  render() {
    return html`
      <section>
        <div class="profile-img">
          <img src="/images/profile.jpg" alt="profile" />
        </div>
        <h1 class="profile-name">mohammad mahdi zamanian</h1>
        <h3 class="job-name">junior full stack web developer</h3>
        <div class="socials">
          <a
            href="https://github.com/mm25zamanian"
            target="_blank"
            class="social github"
            >${unsafeSVG(github)}</a
          >
          <a
            href="https://codepen.io/mm25zamanian"
            target="_blank"
            class="social codepen"
            >${unsafeSVG(codepen)}</a
          >
          <a
            href="https://t.me/mm25zamanian"
            target="_blank"
            class="social telegram"
            >${unsafeSVG(telegram)}</a
          >
          <a
            href="https://www.instagram.com/mm25zamanian/"
            target="_blank"
            class="social instagram"
            >${unsafeSVG(instagram)}</a
          >
          <a
            href="https://stackoverflow.com/users/17874518/"
            target="_blank"
            class="social stackoverflow"
            >${unsafeSVG(stackoverflow)}</a
          >
        </div>
      </section>
    `;
  }

  meta() {
    return {
      title: config.appName,
      titleTemplate: null,
      description: config.appDescription,
    };
  }
}
