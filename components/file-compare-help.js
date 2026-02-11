import { LitElement, css, html } from 'lit';

class CompareHelp extends LitElement {
  render() {
    return html`
      <h2>Comparing Files</h2>
      <p>
        After uploading at least two SCL files to MICT, you can use the file
        comparison feature to compare their contents and see the differences
        between them. This can be particularly useful when you want to see what
        changes have been made between two versions of a file or when you want
        to compare a modified file against its original version.
      </p>
      <h3>How to Use the File Comparison Feature</h3>
      <p>
        Click on the "Compare Files" option from the Navigation Pane to access
        this feature. The Main Workspace will then display the file compare
        interface. You can define what specific area of the SCL file you want to
        compare using the "Comparison Rules" selector. Next, select the two
        files you want to compare from dropdown menus. then, if applicable,
        define the scope of the comparison in the text box that appears below.
        Once you've selected the files and defined the comparison rules, click
        on the "Compare" button to view the differences between them.
      </p>
      <p>
        The results will be displayed in a tree view format, where the
        differences between the two files can be identified by their assigned
        colors (viewed in the file selector). You can expand and collapse the
        different sections of the tree view to explore the differences in more
        detail.
      </p>
      <h3>Accessing the File Comparison Help Guide</h3>
      <p>
        This editor comes with its own help guide that provides more detailed
        instructions on how to use the file compare feature and interpret the
        results. To access it, click on the
        <md-icon style="vertical-align: middle;">info</md-icon> icon located
        near the top-right corner of the Main Workspace.
      </p>
      <video
        controls
        src=${new URL('../assets/compare-files.mp4', import.meta.url).href}
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

customElements.define('compare-help', CompareHelp);
export const CompareHelpTemplate = html`<compare-help></compare-help>`;
