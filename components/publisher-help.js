import { LitElement, css, html } from 'lit';

class PublisherHelp extends LitElement {
  render() {
    return html`
      <h2>Using the Publisher</h2>
      <p>
        Courtesy of the OpenSCD community, the Publisher allows you to add
        report control blocks and datasets to an IED. While this tool allows for
        the configuration of GOOSE blocks and SMVs (Sampled Values), please note
        that they are not needed for IEDs related to Meinberg clocks.
      </p>
      <h3>Adding Report Control Blocks</h3>
      <p>
        In the "Report" section, you can add a report control block to your IED
        by clicking on the icon to the right of the IED's name. A new report
        control block will then display, which you can click on its name to
        customize or on the trash can to delete. Once you click on its name, the
        tool will display three views: (from left to right) the list of report
        control blocks, the dataset connected to the selected block, and the
        configuration settings for the report control block.
      </p>
      <video
        controls
        src=${new URL('../assets/publisher-pt1.mp4', import.meta.url).href}
      ></video>
      <h3>Adding Datasets</h3>
      <p>
        In the middle view, you can add a dataset to your IED and connect it to
        your selected report control block. You can choose to add data
        attributes or data objects to the dataset. When you click either button,
        a tree view will be displayed, starting from the logical device. You can
        expand this view to include the data attributes or functional
        constraints (FC) found within a data object. You can select these
        elements individually or all at once by clicking the double-checkmark
        icon located at the top. You can also use the search field at the top to
        look for logical nodes or a data object in a selected logical node. When
        you are done, click the "Save" button located at the bottom right of
        this window, and your dataset will populate. You can reaccess this
        dataset in the "Dataset" section.
      </p>
      <video
        controls
        src=${new URL('../assets/publisher-pt2.mp4', import.meta.url).href}
      ></video>
      <h3>Configuring Report Control Blocks</h3>
      <p>
        On the right, it will display all the attributes, trigger options, and
        optional fields you can add and configure to this block. To add any of
        these elements to the block, click on the toggle found on the right-hand
        side of this view. When adding a trigger option or optional field, to
        set its value to true, ensure the checkbox located on the left-hand side
        of this view is checked. Please click the "Save" button to ensure your
        changes are saved to the IED.
      </p>
      <video
        controls
        src=${new URL('../assets/publisher-pt3.mp4', import.meta.url).href}
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

customElements.define('publisher-help', PublisherHelp);
export const PublisherHelpTemplate = html`<publisher-help></publisher-help>`;
