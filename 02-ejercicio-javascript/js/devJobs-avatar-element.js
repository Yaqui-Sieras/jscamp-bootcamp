class DevJobsAvatar extends HTMLElement {
  constructor() {
    super(); // Llamada al constructor de la clase padre
    this.attachShadow({ mode: "open" });
  }

  createdURL(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  createdAltText(username) {
    return `Avatar de ${username}` ?? "Avatar";
  }

  render() {
    const service = this.getAttribute("service") ?? "github";
    const username = this.getAttribute("username") ?? "yaqui-sieras";
    const sizePX = this.getAttribute("size") ?? "40";
    const sizeRem = parseInt(sizePX, 10) / 10; // Convertir a rem (asumiendo 1rem = 10px)

    const url = this.createdURL(service, username);
    const alt = this.createdAltText(username);

    this.shadowRoot.innerHTML = `
    <style>
      .avatar {
      width: ${sizeRem}rem;
      height: ${sizeRem}rem;
      border-radius: 100%;
      object-fit: cover;
      }
    </style>
      <img class="avatar" src="${url}" alt="${alt}" />
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
export default DevJobsAvatar;
