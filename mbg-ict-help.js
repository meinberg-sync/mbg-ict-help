import { LitElement, html, css } from 'lit';

import { MICTGettingStartedTemplate } from './components/getting-started.js';
import { IedEditorHelpTemplate } from './components/ied-editor-help.js';
import { PublisherHelpTemplate } from './components/publisher-help.js';
import { CommunicationHelpTemplate } from './components/communication-help.js';
import { CleanupHelpTemplate } from './components/cleanup-help.js';
import { CompareHelpTemplate } from './components/file-compare-help.js';
import { SourceEditorHelpTemplate } from './components/source-editor-help.js';
import { MenuHelpTemplate } from './components/menu-help.js';
import { AboutOpenSCDTemplate } from './components/about-oscd.js';
import { ContactHelpTemplate } from './components/contact-help.js';

import '@material/web/dialog/dialog.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/text-button.js';
import '@material/web/divider/divider.js';

const STARTUP_KEY = 'mbg-ict-help-startup';

const SECTIONS = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: 'school',
    template: MICTGettingStartedTemplate,
  },
  {
    id: 'ied-editor',
    label: 'IED Editor',
    icon: 'developer_board',
    template: IedEditorHelpTemplate,
  },
  {
    id: 'publisher',
    label: 'Publisher',
    icon: 'dataset',
    template: PublisherHelpTemplate,
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: 'lan',
    template: CommunicationHelpTemplate,
  },
  {
    id: 'cleanup-editor',
    label: 'Cleanup Editor',
    icon: 'cleaning_services',
    template: CleanupHelpTemplate,
  },
  {
    id: 'compare-files',
    label: 'Compare Files',
    icon: 'difference',
    template: CompareHelpTemplate,
  },
  {
    id: 'source-editor',
    label: 'Source Editor',
    icon: 'code',
    template: SourceEditorHelpTemplate,
  },
  {
    id: 'menu-items',
    label: 'Menu Items',
    icon: 'menu',
    template: MenuHelpTemplate,
  },
  {
    id: 'about',
    label: 'About OpenSCD',
    icon: 'info',
    template: AboutOpenSCDTemplate,
  },
  {
    id: 'contact-support',
    label: 'Contact Support',
    icon: 'support',
    template: ContactHelpTemplate,
  },
];

export default class MbgIctHelp extends LitElement {
  static properties = {
    activeIndex: { state: true },
    expanded: { state: true },
  };

  constructor() {
    super();
    this.activeIndex = 0;
    this.expanded = true;
  }

  run() {
    this.shadowRoot.querySelector('md-dialog').show();
  }

  firstUpdated() {
    if (localStorage.getItem(STARTUP_KEY) !== null) return;

    localStorage.setItem(STARTUP_KEY, 'true');
    this.shadowRoot.querySelector('md-dialog').show();
  }

  selectSection(index) {
    this.activeIndex = index;
    this.shadowRoot.querySelector('.mict-help-panel').scrollTop = 0;
  }

  toggleNav() {
    this.expanded = !this.expanded;
  }

  render() {
    const active = SECTIONS[this.activeIndex];

    return html`
      <md-dialog class="mict-help-dialog">
        <div slot="headline" class="mict-help-headline">
          User Guide for Meinberg ICT
          <md-text-button
            @click="${() => this.shadowRoot.querySelector('md-dialog').close()}"
            >Close</md-text-button
          >
        </div>

        <div slot="content" class="mict-help-body">
          <nav
            id="help-nav"
            class="mict-help-nav ${this.expanded ? '' : 'collapsed'}"
            aria-label="Help Sections"
          >
            <md-list>
              ${SECTIONS.map(
                (section, index) => html`
                  <md-list-item
                    type="button"
                    aria-current=${index === this.activeIndex
                      ? 'true'
                      : 'false'}
                    aria-label=${section.label}
                    title=${this.expanded ? '' : section.label}
                    @click=${() => this.selectSection(index)}
                  >
                    <md-icon slot="start">${section.icon}</md-icon>
                    ${this.expanded ? section.label : ''}
                  </md-list-item>
                `,
              )}
            </md-list>

            <md-divider></md-divider>

            <md-list-item
              type="button"
              class="expand-help"
              aria-controls="help-nav"
              aria-expanded=${String(this.expanded)}
              aria-label=${this.expanded
                ? 'Collapse Navigation'
                : 'Expand Navigation'}
              title="${this.expanded ? '' : 'Expand Navigation'}"
              @click=${this.toggleNav}
            >
              <md-icon slot="start"
                >${this.expanded
                  ? 'arrow_menu_close'
                  : 'arrow_menu_open'}</md-icon
              >
              ${this.expanded ? 'Collapse Navigation' : ''}
            </md-list-item>
          </nav>

          <section id="${active.id}-section" class="mict-help-panel">
            ${active.template}
          </section>
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

    .mict-help-dialog {
      --mbg-help-dialog-height: 95vh;

      width: 80vw;
      max-width: 80vw;
      max-height: var(--mbg-help-dialog-height);
    }

    .mict-help-headline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
    }

    .mict-help-body {
      display: flex;
      gap: 1rem;
      height: calc(var(--mbg-help-dialog-height) - 10rem);
      box-sizing: border-box;
    }

    .mict-help-nav {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      width: 15rem;
      transition: width 150ms ease;
      overflow: hidden;
      border-right: solid 0.5px
        var(--md-sys-color-outline-variant, var(--oscd-base1));
    }

    .mict-help-nav.collapsed {
      width: 4.5rem;
    }

    .mict-help-nav md-list {
      --md-list-container-color: transparent;

      flex: 1;
      overflow-y: auto;
      scrollbar-gutter: stable;
    }

    .mict-help-nav md-list-item {
      width: calc(100% - 1rem);
      border-radius: 2rem;
      white-space: nowrap;
    }

    .mict-help-nav md-list-item[aria-current='true'] {
      --md-list-item-container-color: color-mix(
        in srgb,
        var(--oscd-primary) 15%,
        transparent
      );
      --md-list-item-label-text-color: var(--oscd-primary);
      --md-list-item-leading-icon-color: var(--oscd-primary);
    }

    .mict-help-nav md-divider {
      width: calc(100% - 1rem);
      margin: 0.5rem 0;
    }

    .mict-help-panel {
      flex: 1;
      min-width: 0;
      overflow-y: auto;
    }

    video {
      width: 60%;
      display: block;
      margin: 0 auto;
    }
  `;
}
