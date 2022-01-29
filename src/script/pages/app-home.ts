import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import shuffle from '../utils/shuffle';
// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

const HIRAGANA: Hiragana[] = [
  { symbol: 'あ', romaji: 'a' },
  { symbol: 'い', romaji: 'i' },
  { symbol: 'う', romaji: 'u' },
  { symbol: 'え', romaji: 'e' },
  { symbol: 'お', romaji: 'o' },
  { symbol: 'か', romaji: 'ka' },
  { symbol: 'き', romaji: 'ki' },
  { symbol: 'く', romaji: 'ku' },
  { symbol: 'け', romaji: 'ke' },
  { symbol: 'こ', romaji: 'ko' },
  { symbol: 'さ', romaji: 'sa' },
  { symbol: 'し', romaji: 'shi' },
  { symbol: 'す', romaji: 'su' },
  { symbol: 'せ', romaji: 'se' },
  { symbol: 'そ', romaji: 'so' },
  { symbol: 'た', romaji: 'ta' },
  { symbol: 'ち', romaji: 'chi' },
  { symbol: 'つ', romaji: 'tsu' },
  { symbol: 'て', romaji: 'te' },
  { symbol: 'と', romaji: 'to' },
  { symbol: 'な', romaji: 'na' },
  { symbol: 'に', romaji: 'ni' },
  { symbol: 'ぬ', romaji: 'nu' },
  { symbol: 'ね', romaji: 'ne' },
  { symbol: 'の', romaji: 'no' },
  { symbol: 'は', romaji: 'ha' },
  { symbol: 'ひ', romaji: 'hi' },
  { symbol: 'ふ', romaji: 'fu' },
  { symbol: 'へ', romaji: 'he' },
  { symbol: 'ほ', romaji: 'ho' },
  { symbol: 'ま', romaji: 'ma' },
  { symbol: 'み', romaji: 'mi' },
  { symbol: 'む', romaji: 'mu' },
  { symbol: 'め', romaji: 'me' },
  { symbol: 'も', romaji: 'mo' },
  { symbol: 'や', romaji: 'ya' },
  { symbol: 'ゆ', romaji: 'yu' },
  { symbol: 'よ', romaji: 'yo' },
  { symbol: 'ら', romaji: 'ra' },
  { symbol: 'り', romaji: 'ri' },
  { symbol: 'る', romaji: 'ru' },
  { symbol: 'れ', romaji: 're' },
  { symbol: 'ろ', romaji: 'ro' },
  { symbol: 'わ', romaji: 'wa' },
  { symbol: 'を', romaji: 'wo' },
  { symbol: 'ん', romaji: 'n' },
];

@customElement('app-home')
export class AppHome extends LitElement {
  @property() message = 'Welcome!';

  @state() hiragana = shuffle(HIRAGANA);

  static get styles() {
    return css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .split {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      pwa-install {
        position: absolute;
        bottom: 0;
      }

      fluent-button {
        font-size: 1rem;
        background-color: #329e0e;
      }

      @media (screen-spanning: single-fold-vertical) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }
      }

      @media (prefers-color-scheme: light) {
        fluent-card {
          --fill-color: #edebe9;
        }

        fluent-button {
          --fill-color: #623b5a;
        }
      }

      @media (prefers-color-scheme: dark) {
        fluent-card {
          --fill-color: #1f2232;
          color: white;
          border: none;
        }

        fluent-button {
          --accent-fill-rest: #e3bac6;
          --accent-fill-active: #fde8e9;
          --accent-fill-hover: #fde8e9;
          --foreground-on-accent-rest: #1f2232;
          --foreground-on-accent-active: #1f2232;
          --foreground-on-accent-hover: #1f2232;
          --accent-stroke-control-rest: #fde8e9;

          --density: 4;
          font-size: 1.5rem;
        }

        flip-card {
          --accent-fill-rest: #e3bac6;
          --foreground-on-accent-rest: #1f2232;

          --neutral-fill-rest: #fde8e9;
        }
      }

      #welcomeCard {
        padding: 1rem 2rem;
        width: min(100%, 40rem);
      }

      #hiraganaSet {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;
        justify-content: center;
      }

      @media (min-width: 480px) {
        #welcomeCard {
          padding: 1rem;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  shuffle() {
    this.hiragana = shuffle(HIRAGANA);
  }

  render() {
    return html`
      <app-header></app-header>

      <div>
        <div id="welcomeBar">
          <fluent-card id="welcomeCard">
            <div class="split">
              <h2>Practice your Hiragana!</h2>

              <fluent-button appearance="accent" @click=${this.shuffle}
                >Shuffle</fluent-button
              >
            </div>

            <div id="hiraganaSet">${this.hiragana.map(renderCard)}</div>
          </fluent-card>
        </div>

        <pwa-install>Install Hiragana Memo</pwa-install>
      </div>
    `;
  }
}

function renderCard({ symbol, romaji }: Hiragana) {
  return html`<flip-card flipped=${romaji} face=${symbol} />`;
}

type Hiragana = {
  symbol: string;
  romaji: string;
};

