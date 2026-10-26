import { LitElement, css, html } from 'lit';

class MenuHelp extends LitElement {
  render() {
    return html`
      <h2>Helpful Menu Items</h2>
      <p>
        The menu options in MICT provide quick access to several important
        features that can help you manage your SCL files more effectively.
      </p>
      <h3>How to Access</h3>
      <p>
        To access the menu options, click the
        <md-icon style="vertical-align: middle;">arrow_drop_down</md-icon>
        icon next to the Meinberg logo in the top-left corner of the App Bar.
        The menu contains the following items:
      </p>
      <ul>
        <li>
          <b>File Management</b>: open, save, rename, and close SCL files. Hover
          over this item to show its options.
        </li>
        <li><b>Extract IED</b>: export a single IED into its own file.</li>
        <li><b>Validate SCL</b>: check your file for errors.</li>
        <li><b>Help</b>: reopen this help guide.</li>
      </ul>
      <img
        src=${new URL('../assets/menu/menu-overview.png', import.meta.url).href}
        alt="The MICT menu with the File Management options shown"
      />
      <h3>File Management Options</h3>
      <p>The "File Management" item contains the following options:</p>
      <ul>
        <li>
          <b>Open File</b>: opens an SCL file from your computer. The file is
          added to the files already loaded in MICT.
        </li>
        <li>
          <b>Save File</b>: saves the active SCL file to your computer. In
          browsers that support it, such as Chrome and Edge, a "Save As" window
          lets you choose where to save the file. Other browsers download the
          file to your Downloads folder instead.
        </li>
        <li>
          <b>Rename File</b>: changes the name and extension of the active SCL
          file.
        </li>
        <li><b>Close File</b>: removes the active SCL file from MICT.</li>
      </ul>
      <p>
        NOTE: Close File does not ask you to confirm and does not save your
        changes. Save the file first if you want to keep your work.
      </p>
      <h3>Renaming the Active File</h3>
      <p>
        To rename the active file, select "Rename File" from the File Management
        options. A pop-up will appear with a text field for the new file name
        and a dropdown to select the file extension (CID, ICD, IID, SCD, SED, or
        SSD). Click the "Rename" button, and the new name will be shown in the
        App Bar. You cannot use the name of another file that is already open.
      </p>
      <video
        controls
        src=${new URL('../assets/menu/file-rename.mp4', import.meta.url).href}
      ></video>
      <h3>Using the IED Extractor</h3>
      <p>
        The IED Extractor exports a single IED from the active file into its own
        file, which is useful for loading a configuration onto one device. Click
        on the "Extract IED" menu item to open it. The IEDs in your file are
        listed by manufacturer, with Meinberg IEDs shown first. Select the IED
        you want to export.
      </p>
      <p>
        Next, choose the type of file to create: CID (a configured IED, ready to
        load onto a device), ICD (an IED template), or IID (an IED with
        project-specific settings). MICT checks the IED against the rules for
        each file type, and the icon on each button shows the result:
      </p>
      <ul>
        <li>A green check mark means the IED passes every rule.</li>
        <li>
          A yellow warning sign means there are only minor issues. You can still
          download the file.
        </li>
        <li>
          A red error sign means there is at least one blocking issue, and the
          file is likely to be rejected by the device or other tools.
        </li>
      </ul>
      <p>
        When there are issues, click the colored bar below the buttons to see
        each rule that failed and why it matters. Click "Download" to save the
        file, which is named after the IED. If the file has a blocking issue,
        MICT lists the failed rules first, and you can either go "Back" to fix
        them or "Continue anyway" to download the file. To see every rule for
        the selected file type, click "Validation Rules" at the top of the
        pop-up.
      </p>
      <video
        controls
        src=${new URL('../assets/menu/ied-extractor.mp4', import.meta.url).href}
      ></video>
      <h3>Validating Your File</h3>
      <p>
        Click on the "Validate SCL" menu item to check the active file for
        errors. The pop-up contains three types of validation:
      </p>
      <ul>
        <li>
          <b>Schema</b>: checks that the file follows the structure defined by
          the IEC 61850 SCL schema.
        </li>
        <li>
          <b>Template</b>: checks the data type definitions in the file against
          the IEC 61850 standard.
        </li>
        <li>
          <b>OCL</b>: checks the file against a set of consistency rules, such
          as unique names and valid references and values.
        </li>
      </ul>
      <p>
        Click a "Run" button to start that validation. The number of issues
        found is shown next to its title, and you can click the arrow on the
        right to show or hide the list of issues. To have a validation run
        automatically each time you change your file, turn on its "Auto validate
        on change" switch.
      </p>
      <video
        controls
        src=${new URL('../assets/menu/validate-scl.mp4', import.meta.url).href}
      ></video>
      <h3>Navigating Between Files</h3>
      <p>
        Since you can open multiple SCL files in MICT (one at a time), you can
        switch between them by clicking on the file name in the top-right corner
        of the App Bar. This menu lists all the files that are currently open.
        Click on a file name to make it the active file. The tab you are on will
        then show the contents of that file.
      </p>
      <video
        controls
        src=${new URL('../assets/menu/file-switcher.mp4', import.meta.url).href}
      ></video>
    `;
  }

  static styles = css`
    video {
      width: 50vw;
      display: block;
      margin: 0 auto;
    }

    img {
      width: 50vw;
      display: block;
      margin: 0 auto;
    }
  `;
}

customElements.define('menu-help', MenuHelp);
export const MenuHelpTemplate = html`<menu-help></menu-help>`;
