import { LitElement, html, css } from 'lit';

import { MICTGettingStartedTemplate } from './components/getting-started.js';
import { IedEditorHelpTemplate } from './components/ied-editor-help.js';
import { PublisherHelpTemplate } from './components/publisher-help.js';
import { CommunicationHelpTemplate } from './components/communication-help.js';
import { CompareHelpTemplate } from './components/file-compare-help.js';
import { SourceEditorHelpTemplate } from './components/source-editor-help.js';
import { MenuHelpTemplate } from './components/menu-help.js';
import { AboutOpenSCDTemplate } from './components/about-oscd.js';
import { ContactHelpTemplate } from './components/contact-help.js';

import '@material/web/dialog/dialog.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/tabs/secondary-tab.js';
import '@material/web/tabs/tabs.js';
import '@material/web/button/text-button.js';
import '@material/web/checkbox/checkbox.js';

const startupKey = 'mbg-ict-help-startup';

export default class MbgIcdExtractor extends LitElement {
  run() {
    this.shadowRoot.querySelector('md-dialog').show();
  }

  handleTabChange(event) {
    const selectedIndex = event.target.activeTabIndex;
    this.shadowRoot
      .querySelectorAll('[id*="section"]')
      .forEach((panel, index) => {
        if (index !== selectedIndex) {
          panel.setAttribute('hidden', '');
        } else {
          panel.removeAttribute('hidden');
        }
      });
  }

  render() {
    return html`
      <md-dialog
        style="min-width: 80vw; max-width: 80vw; min-height: 60vh; max-height: 90vh;"
        ?open=${!localStorage.getItem(startupKey)}
      >
        <div slot="headline" class="mict-help-headline">
          User Guide for Meinberg ICT
          <md-tabs
            aria-label="Help Tabs"
            active-tab-index="0"
            @change=${this.handleTabChange}
          >
            <md-primary-tab
              id="getting-started-tab"
              aria-controls="getting-started-section"
            >
              <md-icon slot="icon">school</md-icon>
              Getting Started
            </md-primary-tab>
            <md-primary-tab
              id="ied-editor-tab"
              aria-controls="ied-editor-section"
            >
              <md-icon slot="icon">edit</md-icon>
              IED Editor
            </md-primary-tab>
            <md-primary-tab
              id="publisher-tab"
              aria-controls="publisher-section"
            >
              <md-icon slot="icon">publish</md-icon>
              Publisher
            </md-primary-tab>
            <md-primary-tab
              id="communication-editor-tab"
              aria-controls="communication-editor-section"
            >
              <md-icon slot="icon">settings_ethernet</md-icon>
              Communication Editor
            </md-primary-tab>
            <md-primary-tab
              id="compare-files-tab"
              aria-controls="compare-files-section"
            >
              <md-icon slot="icon">compare</md-icon>
              Compare Files
            </md-primary-tab>
            <md-primary-tab
              id="source-editor-tab"
              aria-controls="source-editor-section"
            >
              <md-icon slot="icon">code</md-icon>
              Source Editor
            </md-primary-tab>
            <md-primary-tab
              id="menu-items-tab"
              aria-controls="menu-items-section"
            >
              <md-icon slot="icon">menu</md-icon>
              Menu Items
            </md-primary-tab>
            <md-primary-tab id="about-tab" aria-controls="about-section">
              <md-icon slot="icon">info</md-icon>
              About OpenSCD
            </md-primary-tab>
            <md-primary-tab
              id="contact-support-tab"
              aria-controls="contact-support-section"
            >
              <md-icon slot="icon">support</md-icon>
              Contact Support
            </md-primary-tab>
          </md-tabs>
        </div>

        <div slot="content">
          <div
            role="tabpanel"
            id="getting-started-section"
            aria-labelledby="getting-started-tab"
          >
            ${MICTGettingStartedTemplate}
          </div>
          <div
            role="tabpanel"
            id="ied-editor-section"
            aria-labelledby="ied-editor-tab"
            hidden
          >
            ${IedEditorHelpTemplate}
          </div>
          <div
            role="tabpanel"
            id="publisher-section"
            aria-labelledby="publisher-tab"
            hidden
          >
            ${PublisherHelpTemplate}
          </div>
          <div
            role="tabpanel"
            id="communication-editor-section"
            aria-labelledby="communication-editor-tab"
            hidden
          >
            ${CommunicationHelpTemplate}
          </div>
          <div
            role="tabpanel"
            id="compare-files-section"
            aria-labelledby="compare-files-tab"
            hidden
          >
            ${CompareHelpTemplate}
          </div>
          <div
            role="tabpanel"
            id="source-editor-section"
            aria-labelledby="source-editor-tab"
            hidden
          >
            ${SourceEditorHelpTemplate}
          </div>
          <div
            role="tabpanel"
            id="menu-items-section"
            aria-labelledby="menu-items-tab"
            hidden
          >
            ${MenuHelpTemplate}
          </div>
          <div
            role="tabpanel"
            id="about-section"
            aria-labelledby="about-tab"
            hidden
          >
            ${AboutOpenSCDTemplate}
          </div>
          <div
            role="tabpanel"
            id="contact-support-section"
            aria-labelledby="contact-support-tab"
            hidden
          >
            ${ContactHelpTemplate}
          </div>
        </div>

        <div class="mict-help-actions" slot="actions">
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
      --md-dialog-container-shape: 1rem;
    }

    div[role='tabpanel'] {
      margin: 2rem 0;
    }

    .mict-help-headline {
      display: flex;
      flex-flow: column;
      gap: 0.5rem;
      padding-bottom: 0;
      font-weight: 500;
    }

    .mict-help-headline md-tabs {
      width: 100%;
    }

    video {
      width: 60%;
      display: block;
      margin: 0 auto;
    }

    .mict-help-actions {
      display: flex;
      justify-content: space-between;
    }

    label {
      display: flex;
      align-items: center;
      font-family: var(--oscd-text-font);
      font-size: 14px;
      color: var(--oscd-base01);
      gap: inherit;
    }
  `;
}
