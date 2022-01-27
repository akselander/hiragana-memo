import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

@customElement('hiragana-card')
export class HiraganaCard extends LitElement {
  @property({ type: String }) symbol = '';
  @property({ type: String }) romaji = '';

  @state() flipped = false;

  static get styles() {
    return css`
      .card {
        width: 6rem;
        height: 6rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      #symbol {
        background-color: #329e0e;
      }

      #romaji {
        background-color: #8c2381;
      }
    `;
  }

  constructor() {
    super();
  }

  flip() {
    console.log(this.romaji, this.symbol);
    this.flipped = true;
  }

  flipBack() {
    this.flipped = false;
  }

  render() {
    return this.flipped
      ? html`<div>
          <p id="romaji" class="card" @click=${this.flipBack}>${this.romaji}</p>
        </div>`
      : html`<div>
          <p id="symbol" class="card" @click=${this.flip}>${this.symbol}</p>
        </div>`;
  }
}
