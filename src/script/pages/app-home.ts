import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

const hiragana: Hiragana[] = [
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

  static get styles() {
    return css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fluent-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      #mainInfo fluent-anchor::part(control),
      #infoCard fluent-anchor::part(control) {
        color: white;
      }

      @media (min-width: 1024px) {
        #welcomeCard,
        #infoCard {
          width: 54%;
        }
      }

      @media (screen-spanning: single-fold-vertical) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media (prefers-color-scheme: light) {
        fluent-card {
          --fill-color: #edebe9;
        }

        #mainInfo fluent-anchor::part(control),
        #infoCard fluent-anchor::part(control) {
          color: initial;
        }
      }

      @media (prefers-color-scheme: dark) {
        fluent-card {
          --fill-color: #4e4e4e;
          color: white;
          border: none;
        }
      }

      #hiraganaSet {
        display: flex;
        flex-wrap: wrap;
        column-gap: 5rem;
        justify-content: center;
      }
    `;
  }

  constructor() {
    super();
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <div>
        <div id="welcomeBar">
          <fluent-card id="welcomeCard">
            <h2>${this.message}</h2>

            <p>Here you can practice your Hiragana!</p>

            <div id="hiraganaSet">${hiragana.map(renderCard)}</div>
          </fluent-card>
        </div>

        <pwa-install>Install Hiragana Memo</pwa-install>
      </div>
    `;
  }
}

function renderCard({ symbol, romaji }: Hiragana) {
  return html`<hiragana-card romaji=${romaji} symbol=${symbol} />`;
}

type Hiragana = {
  symbol: string;
  romaji: string;
};
