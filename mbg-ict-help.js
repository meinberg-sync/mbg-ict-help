import { LitElement, html, css } from 'lit';

import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/checkbox/checkbox.js';

const startupKey = 'mbg-ict-help-startup';

export default class MbgIcdExtractor extends LitElement {
  run() {
    this.shadowRoot.querySelector('md-dialog').show();
  }

  render() {
    return html`
      <md-dialog ?open=${!localStorage.getItem(startupKey)}>
        <div slot="headline">Help</div>
        <div slot="content">
          <details class="ict-help-section" open>
            <summary>Getting Started</summary>
            <p>
              Welcome to Meinberg ICT! Here, you can configure your IEDs,
              Datasets, Report Controls, and Subnetworks for your digital
              substation.
            </p>
            <p>
              You can use this tool on its own, or, for more optimal use, you
              can use it in tandem with Meinberg's family of IEC 61850 tools,
              all integrated in our IMS, Lantime, and microSync models. For more
              information on our products, visit us
              <a
                href="https://www.meinbergglobal.com/english/products/"
                target="_blank"
                >here</a
              >!
            </p>
            <p>
              To start, click the "Open Project" button to upload an SCL file to
              the tool. Files with the following extensions should be submitted
              to the tool:
            </p>
            <ul>
              <li>.icd</li>
              <li>.cid</li>
              <li>.iid</li>
              <li>.scd</li>
              <li>.scl</li>
            </ul>
            <img
              width="100%"
              src=${new URL('./assets/start-mict.png', import.meta.url).href}
              alt="Click 'Open Project' to start using Meinberg ICT"
            />
          </details>

          <details class="ict-help-section">
            <summary>Using the IED Editor</summary>
            <p>
              To access the IED Editor, after uploading your file, click on the
              “IED” tab above. Here, you can view the data model of an IED in
              tree view and initialize data attributes.
            </p>
            <h3>Selecting and Renaming an IED</h3>
            <p>
              When opening this page, you'll be greeted by a dropdown menu where
              you can choose which IED to view and configure. Once you select an
              IED, a pencil icon will appear on the right to rename the IED.
              Type in the new name you want to give your IED and either hit
              enter in the field or click on the “Save” icon. (NOTE: You will
              need to select the IED you just renamed again as the Editor needs
              to refresh to take into account this change.)
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/ied-editor-pt1.mp4', import.meta.url)
                .href}
            ></video>
            <h3>Using the Search Filter</h3>
            <p>
              The Editor also features a search filter where users can narrow
              down what they want to view. For example, if you want to view all
              data objects that have the “stVal” data attribute, type in “stVal”
              in the search text field. From there, you can expand and collapse
              elements in the tree view.
            </p>
            <h3>Initializing Data Attributes</h3>
            <p>
              To initialize a data attribute (DA), click on the plus icon that
              is next to the attribute's name. An input field will be displayed
              in the editor to initialize the DA to a specific value (you may
              need to click on the DA's name to expand the element and display
              the input field). You will also find that the type of input field
              that is displayed depends on the basic type (bType) of the DA. For
              instance, if the DA's bType is a defined enumeration type, a
              dropdown will be displayed where you can select which enumeration
              value to initialize the DA to. If the bType is defined as
              “VisString255,” a text field will be displayed where you can enter
              text of a maximum of 255 characters. If it is a boolean, a toggle
              switch will be displayed (click the toggle to the right for true,
              left for false).
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/ied-editor-pt2.mp4', import.meta.url)
                .href}
            ></video>
          </details>

          <details class="ict-help-section">
            <summary>Using the Publisher</summary>
            <p>
              Courtesy of the OpenSCD community, the Publisher allows you to add
              report control blocks and datasets to an IED. While this tool
              allows for the configuration of GOOSE blocks and SMVs (Sampled
              Values), please note that they are not needed for IEDs related to
              Meinberg clocks.
            </p>
            <h3>Adding Report Control Blocks</h3>
            <p>
              In the "Report" section, you can add a report control block to
              your IED by clicking on the icon to the right of the IED's name. A
              new report control block will then display, which you can click on
              its name to customize or on the trash can to delete. Once you
              click on its name, the tool will display three views: (from left
              to right) the list of report control blocks, the dataset connected
              to the selected block, and the configuration settings for the
              report control block.
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/publisher-pt1.mp4', import.meta.url).href}
            ></video>
            <h3>Adding Datasets</h3>
            <p>
              In the middle view, you can add a dataset to your IED and connect
              it to your selected report control block. You can choose to add
              data attributes or data objects to the dataset. When you click
              either button, a tree view will be displayed, starting from the
              logical device. You can expand this view to include the data
              attributes or functional constraints (FC) found within a data
              object. You can select these elements individually or all at once
              by clicking the double-checkmark icon located at the top. You can
              also use the search field at the top to look for logical nodes or
              a data object in a selected logical node. When you are done, click
              the "Save" button located at the bottom right of this window, and
              your dataset will populate. You can reaccess this dataset in the
              "Dataset" section.
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/publisher-pt2.mp4', import.meta.url).href}
            ></video>
            <h3>Configuring Report Control Blocks</h3>
            <p>
              On the right, it will display all the attributes, trigger options,
              and optional fields you can add and configure to this block. To
              add any of these elements to the block, click on the toggle found
              on the right-hand side of this view. When adding a trigger option
              or optional field, to set its value to true, ensure the checkbox
              located on the left-hand side of this view is checked. Please
              click the "Save" button to ensure your changes are saved to the
              IED.
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/publisher-pt3.mp4', import.meta.url).href}
            ></video>
          </details>

          <details class="ict-help-section">
            <summary>Using the Communication Editor</summary>
            <p>
              The Communication tab is where you can add, delete, and modify
              subnetworks for the SCL file.
            </p>
            <h3>How to Use</h3>
            <p>
              Click on the pencil icon, located either next to the name of the
              subnetwork or after clicking on the connected access point, to
              open the pop-up window and configure your subnetwork. On this
              pop-up, there is a button at the top right that allows you to view
              it in XML format for deeper customization. Be sure to click the
              save button at the bottom right to save your changes.
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/edit-subnetworks.mp4', import.meta.url)
                .href}
            ></video>
          </details>

          <details class="ict-help-section">
            <summary>Helpful Menu Items</summary>
            <h3>How to Open</h3>
            <p>
              To access the menu options, open the hamburger menu (the icon with
              three lines) at the top left of the tool. Here, you can upload
              another SCL file, save the current one you're working on, undo and
              redo changes, view editing history, extract an individual IED into
              its file, and validate your current file's schema.
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/ict-menu-open.mp4', import.meta.url).href}
            ></video>
            <h3>Using the IED Extractor</h3>
            <p>
              This option is accessible by clicking on the “Extract IED” option
              in the side menu. Here, you can look through the list of IEDs
              found in the currently uploaded file and click on the one you'd
              like to extract into its own file. Once you click on an IED in the
              list, it will automatically download it onto your desktop. You can
              select one of the radio buttons below to choose the format in
              which you would like to export your IED.
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/ict-menu-pt1.mp4', import.meta.url).href}
            ></video>
            <h3>Validating Your File</h3>
            <p>
              You can also make sure the schema and template of your SCL file
              are valid by clicking on the “Validating” option in the side menu.
              Here, you can validate them manually or enable the toggles to have
              these validations run automatically each time you make a change to
              your file.
            </p>
            <video
              width="100%"
              controls
              src=${new URL('./assets/ict-menu-pt2.mp4', import.meta.url).href}
            ></video>
          </details>
        </div>
        <div class="mict-help-actions" slot="actions">
          <label>
            Show at startup
            <md-checkbox
              ?checked=${!localStorage.getItem(startupKey)}
              aria-label="Show at startup"
              touch-target="wrapper"
              @input="${({ target }) => {
                localStorage.setItem(startupKey, target.checked ? '' : 'true');
              }}"
            ></md-checkbox>
          </label>
          <md-text-button
            @click="${() => this.shadowRoot.querySelector('md-dialog').close()}"
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `;
  }

  static styles = css`
    * {
      --md-sys-color-surface-container-high: var(--oscd-base2);
      --md-sys-color-surface: var(--oscd-base2);
      --md-sys-color-on-surface: var(--oscd-base01);
      --md-sys-color-on-surface-variant: var(--oscd-base01);
      --md-sys-color-primary: var(--oscd-primary);
    }

    .ict-help-section {
      padding: 1rem 0;
      border-bottom: 1px solid var(--oscd-base1);
    }

    .ict-help-section summary {
      font-family: var(--oscd-text-font);
      font-size: 18px;
      cursor: pointer;
    }

    .mict-help-actions {
      display: flex;
      justify-content: space-between;
    }

    label {
      display: flex;
      align-items: center;
      font-family: var(--oscd-text-font);
      font-size: 14px;
      color: var(--oscd-base01);
    }
  `;
}
