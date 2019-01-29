export default class PhoneViewer {
  constructor({ element, onCatalog = () => {}, addToBasket = () => {} }) {
    this.element = element;
    this.onCatalog = onCatalog; 
    this.addToBasket = addToBasket;

    this.element.addEventListener('click', (e) => {
      const buttonBack = e.target.closest('[data-button="back"]');
      const addBtn = e.target.closest('[data-element="add-to-basket"]');
      const itemName = this.element.querySelector('[data-name]').innerHTML;

      if(buttonBack) {
        this.onCatalog();
      } else if(addBtn) {
        console.log(itemName);
        this.addToBasket(e.target);
      }
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
        <button data-element="add-to-basket">Add to basket</button>

        <h1 data-name>${this._phoneDetails.name}</h1>

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
