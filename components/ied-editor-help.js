import { LitElement, html, css } from 'lit';

class IedEditorHelp extends LitElement {
  render() {
    return html`
      <h2>Using the IED Editor</h2>
      <p>
        To access the IED Editor, after uploading your file, click on the “IED”
        tab above. Here, you can view the data model of an IED in tree view and
        initialize data attributes.
      </p>
      <h3>Selecting and Renaming an IED</h3>
      <p>
        When opening this page, you'll be greeted by a dropdown menu where you
        can choose which IED to view and configure. Once you select an IED, a
        pencil icon will appear on the right to rename the IED. Type in the new
        name you want to give your IED and either hit enter in the field or
        click on the “Save” icon.
      </p>
      <p>
        NOTE: You will need to select the IED you just renamed again, as the
        Editor needs to refresh to take this change into account.
      </p>
      <video
        controls
        src=${new URL('../assets/ied-editor-renaming.mp4', import.meta.url)
          .href}
      ></video>
      <h3>Initializing Data Attributes</h3>
      <p>
        To initialize a data attribute (DA), click the plus icon next to the
        attribute's name. An input field will be displayed in-line with the DA's
        name to initialize it to a specific value.
      </p>
      <p>
        You will find that the type of input field that is displayed depends on
        the basic type (<code>bType</code>) of the DA. For instance, if the DA's
        <code>bType</code> is a defined enumeration type, a dropdown will be
        displayed where you can select which enumeration value to initialize the
        DA to. If it is defined as <code>VisString255</code>, a text field will
        be displayed where you can enter text of a maximum of 255 characters. If
        it is a boolean, a toggle switch will be displayed (click the toggle to
        the right for true, left for false).
      </p>
      <p>
        A set of action buttons accompanies each input field. Click the Save
        button to ensure your changes are saved. To remove initialized values
        from the IED, click on the Trash icon.
      </p>
      <p>
        Moreover, the editor checks the <code>valKind</code> and
        <code>valImport</code> attributes to determine if the DA is configurable
        or read-only. If it is found to be read-only (i.e.,
        <code>valKind="RO"</code>), the input field will be disabled.
      </p>
      <video
        controls
        src=${new URL('../assets/ied-editor-initializing.mp4', import.meta.url)
          .href}
      ></video>
      <h3>Using the Search Filter</h3>
      <p>
        The Editor also features a case-insensitive search filter, allowing
        users to narrow down their view. For example, if you want to view all
        data objects that have the <code>stVal</code> data attribute, type in
        “stVal” in the search text field. From there, you can expand and
        collapse elements in the tree view. Each element (except for
        initializable data attributes) has an expand/collapse all icon on the
        right, allowing you to expand or collapse all its children.
      </p>
      <video
        controls
        src=${new URL('../assets/ied-editor-searching.mp4', import.meta.url)
          .href}
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

customElements.define('ied-editor-help', IedEditorHelp);
export const IedEditorHelpTemplate = html`<ied-editor-help></ied-editor-help>`;
