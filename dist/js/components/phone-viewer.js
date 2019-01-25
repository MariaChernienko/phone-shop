export default class PhoneViewer {
  constructor({ element, onCatalog = () => {} }) {
    this.element = element;
    this.onCatalog = onCatalog; 

    this.element.addEventListener('click', (e) => {
      let buttonBack = e.target.closest('[data-button="back"]');
  
      if(!buttonBack) {
        return;
      }

      this.onCatalog();
    });
  }
  
  show(phoneDetails) {
    this._phoneDetails = phoneDetails;
    this.element.hidden = false;
    this.render();
  }
  hide() {
    this.element.hidden = true;
  }

  render() {
    this.element.innerHTML = `
    <div class="details"> 
      <img class="details__image" src="${this._phoneDetails.images[0]}">
      <div class="details__info">
        <button data-button="back">Back</button>
        <button>Add to basket</button>

        <h1>${this._phoneDetails.name}</h1>

        <p>${this._phoneDetails.description}</p>

        <ul class="phone-thumbs">
        ${this._phoneDetails.images
          .map(
            item => `<li>
        <img src=${item}>
      </li>`
          )
          .join("")}
        </ul>
      </div>
    `;
  }
}
