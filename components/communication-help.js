import { LitElement, css, html } from 'lit';

class CommunicationHelp extends LitElement {
  render() {
    return html`
      <h2>Using the Communication Editor</h2>
      <p>
        The Communication tab is where you can add, delete, and modify
        subnetworks for the SCL file. In the main workspace, each Subnetwork is
        displayed as the outermost card. The innermost card(s) with the
        <md-icon style="vertical-align: middle;">settings_input_hdmi</md-icon>
        icon represent the access points connected to that subnetwork.
      </p>

      <h3>Editing Subnetwork Information</h3>
      <p>
        A new subnetwork can be added to the SCL file's "Communication" section
        by clicking on the "Add Subnetwork" button located at the bottom right
        of the main workspace. To edit a subnetwork's information, click on the
        pencil icon located on the top right side of the subnetwork card. Here,
        you can modify the name, description, type, and bit rate of the
        subnetwork.
      </p>
      <video
        controls
        src=${new URL('../assets/subnetwork-pt1.mp4', import.meta.url).href}
      ></video>

      <h3>Editing Access Points</h3>
      <p>
        To edit an access point, first click on the
        <md-icon style="vertical-align: middle;">settings_input_hdmi</md-icon>
        icon at the center of the access point card. You can then click on the
        pencil icon located on the right to modify its properties.
      </p>
      <video
        controls
        src=${new URL('../assets/subnetwork-pt2.mp4', import.meta.url).href}
      ></video>

      <h3>Allocating Access Points to Subnetworks</h3>
      <p>
        To allocate an access point to a subnetwork, click on the
        <md-icon style="vertical-align: middle;">playlist_add</md-icon>
        icon located on the top right side of the subnetwork card. A pop-up
        window will appear where you can select which access point to allocate
        to the subnetwork from a dropdown menu.
      </p>
      <p>
        Please note that an access point can only be allocated to one subnetwork
        at a time. The pop-up window will let you know if an access point is
        already allocated to another subnetwork, in which it cannot be selected.
      </p>
      <p>
        To remove an access point from a subnetwork, click on the trash can icon
        located on the left of the
        <md-icon style="vertical-align: middle;">settings_input_hdmi</md-icon>
        icon within the access point card.
      </p>
      <video
        controls
        src=${new URL('../assets/subnetwork-pt3.mp4', import.meta.url).href}
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
