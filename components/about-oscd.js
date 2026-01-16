import { LitElement, html } from 'lit';

class AboutOpenSCD extends LitElement {
  render() {
    return html`
      <h2>About OpenSCD</h2>
      <p>
        Meinberg ICT follows the architecture and development process of the
        Open System Configuration Designer, or OpenSCD. OpenSCD is an
        open-source web application that allows users to create and modify IEC
        61850 SCL files.
      </p>
      <p>
        It's important to note that it doesn't store any data "on the internet"
        or "in the cloud." Only the application itself is downloaded from the
        internet, while all processing of the SCL data happens locally on your
        computer; the data never leaves your device!
      </p>
      <p>
        For more information about OpenSCD, visit
        <a href="https://openscd.org/" target="_blank">open-scd.org</a>.
      </p>
    `;
  }
}

customElements.define('about-oscd', AboutOpenSCD);
export const AboutOpenSCDTemplate = html`<about-oscd></about-oscd>`;
