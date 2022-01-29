import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

@customElement('flip-card')
export class FlipCard extends LitElement {
  @property({ type: String }) face = '';
  @property({ type: String }) flipped = '';

  @state() isFlipped = false;

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
        border-radius: 0.375rem;
      }

      #face {
        background: padding-box
          linear-gradient(var(--accent-fill-rest), var(--accent-fill-rest));
        color: var(--foreground-on-accent-rest);
      }

      #flipped {
        background: padding-box
          linear-gradient(var(--neutral-fill-rest), var(--neutral-fill-rest));
        color: var(--neutral-foreground-rest);
      }
    `;
  }

  constructor() {
    super();
  }

  flip() {
    console.log(this.flipped, this.face);
    this.isFlipped = true;
  }

  flipBack() {
    this.isFlipped = false;
  }

  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('flipped') || changedProperties.has('face')) {
      this.isFlipped = false;
    }
  }

  render() {
    return this.isFlipped
      ? html`<div>
          <p id="flipped" class="card" @click=${this.flipBack}>
            ${this.flipped}
          </p>
        </div>`
      : html`<div>
          <p id="face" class="card" @click=${this.flip}>${this.face}</p>
        </div>`;
  }
}

