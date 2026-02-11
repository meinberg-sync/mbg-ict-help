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
        <md-icon style="vertical-align: middle;">
          arrow_drop_down_circle
        </md-icon>
        icon located near the top-left corner of the App Bar. Here, you can
        upload another SCL file, save the current one you're working on, extract
        an individual IED into its file, validate your current file's schema,
        and reaccess this help guide.
      </p>
      <h3>Renaming the Active File</h3>
      <p>
        You can rename the currently active SCL file by clicking on the "Rename
        File" option from the menu. A pop-up will appear with a text input field
        to rename the file and a dropdown menu to select the file extension.
        Once you click the "Rename" button, the file will be renamed and the new
        name will be reflected in the App Bar.
      </p>
      <video
        controls
        src=${new URL('../assets/file-rename.mp4', import.meta.url).href}
      ></video>
      <h3>Using the IED Extractor</h3>
      <p>
        This option is accessible by clicking on the “Extract IED” option. Here,
        you can look through the list of IEDs found in the currently uploaded
        file and click on the one you'd like to extract into its own file. Once
        you click on an IED in the list, it will automatically download it onto
        your desktop. You can select one of the radio buttons below to choose
        the format in which you would like to export your IED.
      </p>
      <video
        controls
        src=${new URL('../assets/ied-extractor.mp4', import.meta.url).href}
      ></video>
      <h3>Validating Your File</h3>
      <p>
        You can also make sure the schema and template of your SCL file are
        valid by clicking on the “Validating” menu option. Here, you can
        validate them manually or enable the toggles to have these validations
        run automatically each time you make a change to your file.
      </p>
      <video
        controls
        src=${new URL('../assets/ied-validator.mp4', import.meta.url).href}
      ></video>
      <h3>Navigating Between Files</h3>
      <p>
        Since you can upload multiple SCL files to MICT (one at a time), you can
        select which file to work on and switch between them by clicking on the
        file name with the
        <md-icon style="vertical-align: middle;"> expand_all </md-icon>
        icon found in the middle of the top App Bar. This panel displays the
        names of all currently loaded files, and you can click on any file name
        to switch to it.
      </p>
      <video
        controls
        src=${new URL('../assets/file-switcher.mp4', import.meta.url).href}
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

customElements.define('menu-help', MenuHelp);
export const MenuHelpTemplate = html`<menu-help></menu-help>`;
