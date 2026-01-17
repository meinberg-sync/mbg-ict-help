import { LitElement, html } from 'lit';

class ContactHelp extends LitElement {
  render() {
    return html`
      <h2>Contacting Support</h2>
      <h3>Requesting Bug Fixes and Features</h3>
      <p>
        Like other distributions of OpenSCD, Meinberg ICT is an open repository
        on GitHub. As such, users can create a new issue
        <a
          href="https://github.com/meinberg-sync/mbg-open-scd/issues"
          target="_blank"
          >here</a
        >
        to request bug fixes and features.
      </p>
      <h3>Meinberg Support Hotlines</h3>
      <p>
        We at Meinberg offer free lifetime support via telephone, email, and
        remote assistance. For any additional help, you can contact our support
        team at the hotlines listed below:
      </p>
      <h4>Meinberg - International</h4>
      <p>Hotline: +49 (0) 52 81 / 93 09 888</p>
      <p>
        Email:
        <a href="techsupport@meinberg.de">techsupport@meinberg.de</a>
      </p>
      <p>
        More information can be found
        <a
          href="https://www.meinbergglobal.com/english/support/tech-support.htm"
          target="_blank"
          >here</a
        >.
      </p>
      <h4>Meinberg - USA</h4>
      <p>Hotline: +1 (877) PTP-1588</p>
      <p>
        Email:
        <a href="techsupport@meinberg-usa.com">techsupport@meinberg-usa.com</a>
      </p>
      <h3>More Information</h3>
      <p>
        You can use this tool on its own, or, for more optimal use, you can use
        it in tandem with Meinberg's family of IEC 61850 tools, all integrated
        in our IMS, Lantime, and microSync models (for more information on our
        products, visit us
        <a
          href="https://www.meinbergglobal.com/english/products/"
          target="_blank"
          >here</a
        >).
      </p>
    `;
  }
}

customElements.define('contact-help', ContactHelp);
export const ContactHelpTemplate = html`<contact-help></contact-help>`;
