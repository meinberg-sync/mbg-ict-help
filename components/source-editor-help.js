import { LitElement, css, html } from 'lit';

class SourceEditorHelp extends LitElement {
  render() {
    return html`
      <h2>Viewing the Raw SCL Markup with the Source Editor</h2>
      <p>
        The Source Editor allows you to view and edit the raw content of the
        active SCL file. This feature is useful for users who want to inspect
        the detailed changes being made to their file, ensure their file is
        properly formatted, or work directly with the XML structure of their
        configuration. It can be particularly useful for advanced users who need
        to inspect or modify the underlying XML structure of their configuration
        files.
      </p>
      <h3>How to Use the Source Editor</h3>
      <p>
        To access the Source Editor, navigate to the "Source Editor" option in
        the Navigation Pane. Once you're in the editor, you'll see a scrollable
        text area displaying the raw SCL markup of your current file. You can
        expand or collapse all sections of the markup, search for specific
        elements or attributes, and format the document using the corresponding
        buttons at the top left of the editor.
      </p>
      <p>
        You can also edit the active document's raw XML content by making
        changes to the text area. However, be cautious when editing the raw
        markup, as incorrect changes may lead to errors in your configuration.
        The editor will display error icons at lines where the file may be
        invalid. Once you're satisfied with your changes, click the "Apply"
        button at the top right of the editor to apply them to the active file.
      </p>
      <video
        controls
        src=${new URL('../assets/source-editor-pt1.mp4', import.meta.url).href}
      ></video>
      <h3>Opening and Using the Settings Panel</h3>
      <p>
        The Source Editor also comes with a settings panel that allows you to
        customize the editor's behavior and appearance. To access the settings,
        enter the keyboard shortcut <code>Ctrl + ,</code> (or
        <code>Cmd + ,</code> on Mac) in the editor. Here, you can enable or
        disable line numbers, toggle word wrap, and choose between light and
        dark themes for the editor. These settings can help improve your editing
        experience by allowing you to tailor the editor to your preferences.
      </p>
      <video
        controls
        src=${new URL('../assets/source-editor-pt2.mp4', import.meta.url).href}
      ></video>
    `;
  }

  static styles = css`
    video {
      width: 50vw;
      display: block;
      margin: 0 auto;
    }
  `;
}

customElements.define('source-editor-help', SourceEditorHelp);
export const SourceEditorHelpTemplate = html`<source-editor-help></source-editor-help>`;
