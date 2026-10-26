import { LitElement, css, html } from 'lit';

class CleanupHelp extends LitElement {
  render() {
    return html`
      <h2>Using the Cleanup Editor</h2>
      <p>
        This plugin editor finds and removes elements that are no longer used in
        your SCL file, allowing users to maintain a clean and efficient file,
        especially after making changes to your project. As such, it is a good
        idea to run a cleanup after removing IEDs or before exporting a final
        file.
      </p>
      <p>
        To access the Cleanup Editor, after uploading your file, click on the
        “Cleanup” tab. The editor analyzes the file right away and shows three
        columns, each listing a different kind of unused element:
      </p>
      <ul>
        <li>
          <b>Unreferenced Datasets</b>: datasets that are not used by any
          control block.
        </li>
        <li>
          <b>Orphaned Control Blocks</b>: control blocks that point to a dataset
          that does not exist, or that have no dataset at all.
        </li>
        <li>
          <b>Unreferenced Data Types</b>: entries in the
          <code>DataTypeTemplates</code> section that are not used by any
          logical node or other data type.
        </li>
      </ul>
      <p>
        The number next to each column's title shows how many elements were
        found.
      </p>
      <img
        src=${new URL('../assets/cleanup-overview.png', import.meta.url).href}
        alt="The Cleanup Editor showing its three columns"
      />
      <h3>Removing Unreferenced Datasets</h3>
      <p>
        Each row shows the dataset's name, followed by the IED it belongs to.
        Hover over a row to show a pencil icon, which opens the dataset's
        attributes if you want to check it before removing it.
      </p>
      <p>
        Check the box next to each dataset you want to remove, then click the
        “Remove Selected Datasets” button at the bottom of the column. The
        number on the button shows how many items are selected. Only the dataset
        itself is removed; the IED's logical devices and logical nodes are not
        changed.
      </p>
      <p>
        Every removal can be reversed. If you remove something by mistake, click
        the Undo icon in the top-right corner of the window.
      </p>
      <video
        controls
        src=${new URL('../assets/cleanup-datasets.mp4', import.meta.url).href}
      ></video>
      <h3>Removing Orphaned Control Blocks</h3>
      <p>
        The row of buttons at the top of this column lets you choose which types
        of control blocks are listed. From left to right, they are Log (L),
        Report (R), GOOSE (G), and Sampled Values (S). Click a button to show or
        hide that type. Report control blocks are hidden by default, because
        report control blocks without a dataset are normal in ICD files and for
        dynamic reports. Turn the Report button on only if you also want to
        clean these up.
      </p>
      <p>
        A warning icon next to a control block means that a network address for
        it exists in the Communication section. When the “Also remove SMV/GSE
        Address” box is checked (the default), that address is removed together
        with the control block. Uncheck it if you want to keep the address, for
        example if you plan to recreate the control block later.
      </p>
      <p>
        Select the control blocks you want to remove and click the “Remove
        Selected Control Blocks” button.
      </p>
      <video
        controls
        src=${new URL('../assets/cleanup-control-blocks.mp4', import.meta.url)
          .href}
      ></video>
      <h3>Removing Unreferenced Data Types</h3>
      <p>
        The buttons at the top of this column filter the list by type: logical
        node types (LN), data object types (DO), data attribute types (DA), and
        enumeration types (EN). All four are shown by default. Below each type's
        name, the row shows its logical node class, its CDC, or its description,
        depending on the type.
      </p>
      <p>
        When the “Also remove subtypes” box is checked (the default), removing a
        data type also removes any of its subtypes that are no longer used
        anywhere else. For example, removing an unused logical node type also
        removes the data object types that only it was using. Subtypes still
        used by another type are kept. Uncheck this box to remove only the items
        you selected.
      </p>
      <p>
        Select the data types you want to remove and click the “Remove Selected
        Data Types” button.
      </p>
      <video
        controls
        src=${new URL('../assets/cleanup-data-types.mp4', import.meta.url).href}
      ></video>
      <h3>Searching and Selecting Many Items</h3>
      <p>
        Each column has a search field that filters the list as you type. The
        search is not case-sensitive and checks the element's name as well as
        the IED name, manufacturer, and type. In the data types column, it also
        checks the type category and description, so typing “XCBR”, for example,
        lists all unused circuit breaker logical node types.
      </p>
      <p>
        The checkbox to the left of the search field selects or deselects every
        item currently shown. Items hidden by the search or by the filter
        buttons are not selected. To clean up a large file quickly, filter the
        list, check that the items shown are safe to remove, click the select
        all checkbox, and then click the remove button.
      </p>
      <p>
        NOTE: The Cleanup Editor only looks at the file that is currently open.
        It cannot tell whether another file still uses an element, so review the
        list before removing large numbers of items.
      </p>
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

customElements.define('cleanup-help', CleanupHelp);
export const CleanupHelpTemplate = html`<cleanup-help></cleanup-help>`;
