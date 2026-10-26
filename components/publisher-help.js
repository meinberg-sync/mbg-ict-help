import { LitElement, css, html } from 'lit';

class PublisherHelp extends LitElement {
  render() {
    return html`
      <h2>Using the Publisher</h2>
      <p>
        Courtesy of the OpenSCD community, the Publisher allows you to add
        report control blocks and datasets to an IED. The buttons at the top of
        the Publisher switch between its four views: GOOSE, SampledValue,
        Report, and DataSet. While this tool allows for the configuration of
        GOOSE blocks and SMVs (Sampled Values), please note that they are not
        needed for IEDs related to Meinberg clocks.
      </p>
      <h3>Adding Report Control Blocks</h3>
      <p>
        Click on the "Report" button at the top of the Publisher. You can then
        add a report control block to your IED by clicking on the
        <md-icon style="vertical-align: middle;">playlist_add</md-icon> icon to
        the right of the IED's name. A new report control block will appear
        below the IED. Click on its name to select it, and the tool will display
        three views: (from left to right) the list of report control blocks, the
        dataset connected to the selected block, and the configuration settings
        for the report control block. To delete a report control block, or to
        edit its clients, click the
        <md-icon style="vertical-align: middle;">more_vert</md-icon> icon on its
        right.
      </p>
      <p>
        NOTE: An IED can only receive a new report control block or dataset if
        its capabilities (defined in its "Services" section) allow it. If
        nothing happens when you click the
        <md-icon style="vertical-align: middle;">playlist_add</md-icon> icon,
        check that the IED supports report control blocks and that it has not
        reached its maximum number of them.
      </p>
      <video
        controls
        src=${new URL('../assets/publisher/pt1.mp4', import.meta.url).href}
      ></video>
      <h3>Adding Datasets</h3>
      <p>
        In the middle view, click the
        <md-icon style="vertical-align: middle;">playlist_add</md-icon> icon to
        create a new dataset and connect it to your selected report control
        block. To connect an existing dataset instead, click the
        <md-icon style="vertical-align: middle;">swap_vert</md-icon> icon. You
        can then choose to add data attributes or data objects to the dataset.
        When you click either button, a tree view will be displayed, starting
        from the logical device. Click the arrow next to an element to expand
        it, down to the data attributes or functional constraints (FC) found
        within a data object, and click on an element to select it. The
        double-checkmark icon at the top of each column applies to every item in
        that column: on the last column it selects all of the listed elements,
        and on the other columns it expands all of them. You can also use the
        search field at the top to look for logical nodes or a data object in a
        selected logical node. When you are done, click the "Save" button
        located at the bottom right of this window, and your dataset will
        populate. Each entry in the dataset can be removed or moved up and down
        using the icons on its right. You can reaccess this dataset in the
        "DataSet" view.
      </p>
      <video
        controls
        src=${new URL('../assets/publisher/pt2.mp4', import.meta.url).href}
      ></video>
      <h3>Configuring Report Control Blocks</h3>
      <p>
        On the right, it will display all the attributes, trigger options, and
        optional fields you can add and configure to this block. To add any of
        these elements to the block, click on the toggle found on the right-hand
        side of this view. When adding a trigger option or optional field, to
        set its value to true, ensure the checkbox located on the left-hand side
        of this view is checked. Each section has its own "Save" button; please
        click it to ensure your changes in that section are saved to the IED.
      </p>
      <video
        controls
        src=${new URL('../assets/publisher/pt3.mp4', import.meta.url).href}
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
