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
        background: padding-box
            linear-gradient(var(--accent-fill-rest), var(--accent-fill-rest)),
          border-box var(--accent-stroke-control-rest);
        color: var(--foreground-on-accent-rest);
      }

      #romaji {
        background: padding-box
            linear-gradient(var(--neutral-fill-rest), var(--neutral-fill-rest)),
          border-box var(--neutral-stroke-control-rest);
        color: var(--neutral-foreground-rest);
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

