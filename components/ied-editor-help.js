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
      <p>
        Click on an element's name to expand or collapse it. Elements that have
        been initialized in the IED are shown in blue. Each element also has a
        pencil icon on the right, which opens a pop-up where you can edit its
        attributes, such as its description.
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
        src=${new URL('../assets/ied-editor/renaming.mp4', import.meta.url)
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
        src=${new URL('../assets/ied-editor/initializing.mp4', import.meta.url)
          .href}
      ></video>
      <h3>Values for Setting Groups</h3>
      <p>
        Some data attributes are settings that can hold a different value for
        each setting group: those with the functional constraint
        <code>SG</code> or <code>SE</code>, in a logical device that defines its
        setting groups (<code>SettingControl</code> with <code>numOfSGs</code>).
        When you initialize one of these attributes, the editor adds one value
        per setting group, labeled "Val 1", "Val 2", and so on. The value for
        the active setting group is marked with "(actSG)".
      </p>
      <p>
        Each value can be edited and saved on its own. Next to every value other
        than the active one, a
        <md-icon style="vertical-align: middle;">sync</md-icon> button copies
        the active setting group's value into that group; it is disabled when
        both values are already the same. Next to the active value, the
        <md-icon style="vertical-align: middle;">delete_sweep</md-icon> button
        removes the values of all setting groups at once.
      </p>
      <p>
        If a setting group has no value, the editor shows "Missing value for SG"
        followed by the group number in red. Click the plus icon next to the
        message to add a value for that group. The new value is set to the
        attribute's default value (or, if it has none, the active setting
        group's value), and you can then edit it like any other value.
      </p>
      <video
        controls
        src=${new URL(
          '../assets/ied-editor/setting-groups.mp4',
          import.meta.url,
        ).href}
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
      <p>
        You can also separate search terms with spaces to search level by level,
        for example <code>LLN0 Mod stVal</code>. Click the filter icon next to
        the search field to choose the scope of the search: "All" searches the
        whole data model, while "Instantiated" only shows elements that have
        been initialized in the IED. For more search tips, click the
        <md-icon style="vertical-align: middle;">help_outline</md-icon> icon to
        open the search help.
      </p>
      <video
        controls
        src=${new URL('../assets/ied-editor/searching.mp4', import.meta.url)
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
