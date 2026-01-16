import { LitElement, html } from 'lit';

class MICTGettingStarted extends LitElement {
  render() {
    return html`
      <h2>Getting Started</h2>
      <p>
        Welcome to Meinberg's IED Configuration Tool! Here, you can configure
        your IEDs, Datasets, Report Controls, and Subnetworks for your digital
        substation.
      </p>
      <p>
        You can use this tool on its own, or, for more optimal use, you can use
        it in tandem with Meinberg's family of IEC 61850 tools, all integrated
        in our IMS, Lantime, and microSync models. For more information on our
        products, visit us
        <a
          href="https://www.meinbergglobal.com/english/products/"
          target="_blank"
          >here</a
        >!
      </p>
      <p>
        To start, click the "Open Project" button to upload an SCL file to the
        tool. Files with the following extensions should be submitted to the
        tool:
      </p>
      <ul>
        <li>.icd</li>
        <li>.cid</li>
        <li>.iid</li>
        <li>.scd</li>
        <li>.scl</li>
      </ul>
    `;
  }
}

customElements.define('mict-getting-started', MICTGettingStarted);
export const MICTGettingStartedTemplate = html`<mict-getting-started></mict-getting-started>`;
