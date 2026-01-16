import { LitElement, css, html } from 'lit';

class CommunicationHelp extends LitElement {
  render() {
    return html`
      <h2>Using the Communication Editor</h2>
      <p>
        The Communication tab is where you can add, delete, and modify
        subnetworks for the SCL file.
      </p>
      <h3>How to Use</h3>
      <p>
        Click on the pencil icon, located either next to the name of the
        subnetwork or after clicking on the connected access point, to open the
        pop-up window and configure your subnetwork. On this pop-up, there is a
        button at the top right that allows you to view it in XML format for
        deeper customization. Be sure to click the save button at the bottom
        right to save your changes.
      </p>
      <video
        controls
        src=${new URL('../assets/edit-subnetworks.mp4', import.meta.url).href}
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

customElements.define('communication-help', CommunicationHelp);
export const CommunicationHelpTemplate = html`<communication-help></communication-help>`;
