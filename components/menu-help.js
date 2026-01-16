import { LitElement, css, html } from 'lit';

class MenuHelp extends LitElement {
  render() {
    return html`
      <h2>Helpful Menu Items</h2>
      <h3>How to Open</h3>
      <p>
        To access the menu options, open the hamburger menu (the icon with three
        lines) at the top left of the tool. Here, you can upload another SCL
        file, save the current one you're working on, undo and redo changes,
        view editing history, extract an individual IED into its file, and
        validate your current file's schema.
      </p>
      <video
        controls
        src=${new URL('../assets/ict-menu-open.mp4', import.meta.url).href}
      ></video>
      <h3>Using the IED Extractor</h3>
      <p>
        This option is accessible by clicking on the “Extract IED” option in the
        side menu. Here, you can look through the list of IEDs found in the
        currently uploaded file and click on the one you'd like to extract into
        its own file. Once you click on an IED in the list, it will
        automatically download it onto your desktop. You can select one of the
        radio buttons below to choose the format in which you would like to
        export your IED.
      </p>
      <video
        controls
        src=${new URL('../assets/ict-menu-pt1.mp4', import.meta.url).href}
      ></video>
      <h3>Validating Your File</h3>
      <p>
        You can also make sure the schema and template of your SCL file are
        valid by clicking on the “Validating” option in the side menu. Here, you
        can validate them manually or enable the toggles to have these
        validations run automatically each time you make a change to your file.
      </p>
      <video
        controls
        src=${new URL('../assets/ict-menu-pt2.mp4', import.meta.url).href}
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
