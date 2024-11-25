import { LitElement, html, css } from 'lit';

import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/checkbox/checkbox.js';

const startupKey = 'mbg-ict-help-startup';

export default class MbgIcdExtractor extends LitElement {
  run() {
    this.shadowRoot.querySelector('md-dialog').show();
  }

  render() {
    return html`
      <md-dialog ?open=${!localStorage.getItem(startupKey)}>
        <div slot="headline">Help</div>
        <div slot="content">
          <video
            width="100%"
            controls
            src="${new URL('./assets/ptp_trackhound.mp4', import.meta.url)}"
          ></video>
        </div>
        <div slot="actions">
          <label>
            Show at startup
            <md-checkbox
              ?checked=${!localStorage.getItem(startupKey)}
              aria-label="Show at startup"
              touch-target="wrapper"
              @input="${({ target }) => {
                localStorage.setItem(startupKey, target.checked ? '' : 'true');
              }}"
            ></md-checkbox>
          </label>
          <md-text-button
            @click="${() => this.shadowRoot.querySelector('md-dialog').close()}"
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `;
  }

  static styles = css`
    * {
      --md-sys-color-surface-container-high: var(--oscd-base2);
      --md-sys-color-surface: var(--oscd-base2);
      --md-sys-color-on-surface: var(--oscd-base01);
      --md-sys-color-on-surface-variant: var(--oscd-base01);
      --md-sys-color-primary: var(--oscd-primary);
    }

    div[slot='actions'] {
      display: flex;
      justify-content: space-between;
    }

    label {
      display: flex;
      align-items: center;
      font-family: var(--oscd-text-font);
      font-size: 14px;
      color: var(--oscd-base01);
    }
  `;
}
