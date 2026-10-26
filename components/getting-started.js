import { LitElement, css, html } from 'lit';

class MICTGettingStarted extends LitElement {
  render() {
    return html`
      <h2>Introduction to MICT</h2>
      <p>
        Welcome to Meinberg's IED Configuration Tool! Here, you can configure
        your IEDs, Datasets, Report Controls, and Subnetworks for your digital
        substation.
      </p>
      <h3>Navigating the Landing Page</h3>
      <p>
        Upon opening the tool, you will be greeted with the landing page. Here,
        you can upload an SCL file to begin configuring your IEDs by clicking
        the "Open File" button. The landing page also provides quick access to
        this help guide and our company website, and you can share your feedback
        with us by clicking the "Take our survey!" link at the bottom.
      </p>
      <img
        src=${new URL(
          '../assets/getting-started/landing-page.png',
          import.meta.url,
        ).href}
        alt="MICT Landing Page"
      />
      <p>
        To start, click the "Open File" button to upload an SCL file to the
        tool. Please note that the tool only accepts files with the following
        extensions: <strong>.icd</strong>, <strong>.cid</strong>,
        <strong>.iid</strong>, <strong>.scd</strong>, <strong>.ssd</strong>, and
        <strong>.sed</strong>.
      </p>
      <h3>Navigating the Interface</h3>
      <p>
        Once you have uploaded an SCL file, the interface will change to show
        the main configuration tools. There are three main sections to the
        interface: the App Bar at the top, the Navigation Pane on the left, and
        the Main Workspace on the right.
      </p>
      <img
        src=${new URL(
          '../assets/getting-started/mict-interface.png',
          import.meta.url,
        ).href}
        alt="MICT Interface Overview"
      />
      <h4>The App Bar</h4>
      <p>
        Located at the top of the interface, the App Bar is where you can access
        quick menu options, switch between different files, and undo/redo
        actions. To access the tool's menu options, click the
        <md-icon style="vertical-align: middle;">arrow_drop_down</md-icon>
        icon next to the Meinberg logo in the top-left corner of the App Bar.
        The name of the tool you are currently using is shown to the right of
        this icon.
      </p>
      <p>
        The active file is displayed near the top-right corner of the App Bar.
        You can click on the file name to switch between multiple opened files.
      </p>
      <p>
        On the right side of the App Bar, you will find the undo and redo
        buttons, represented by the
        <md-icon style="vertical-align: middle;">undo</md-icon> and
        <md-icon style="vertical-align: middle;">redo</md-icon> icons,
        respectively.
      </p>
      <h4>The Navigation Pane and the Main Workspace</h4>
      <p>
        The Navigation Pane allows you to browse through the different IED
        editing tools. At the time of writing, the available tools are the IED
        Editor, the Publisher, the Communication Editor, the Cleanup Editor,
        Compare Files, and the Source Editor. To learn more about each tool,
        please refer to their respective tabs in this help guide. If you need
        more room to work, click "Collapse sidebar" at the bottom of the
        Navigation Pane to hide it.
      </p>
      <p>
        Once you select an editing tool, the Main Workspace will be updated to
        show the editor's content and the configuration options it offers. This
        is where you will perform most of your configuration tasks.
      </p>
    `;
  }

  static styles = css`
    img {
      width: 50vw;
      display: block;
      margin: 0 auto;
    }
  `;
}

customElements.define('mict-getting-started', MICTGettingStarted);
export const MICTGettingStartedTemplate = html`<mict-getting-started></mict-getting-started>`;
