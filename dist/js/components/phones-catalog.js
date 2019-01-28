export default class PhonesCatalog {
  constructor({
    element,
    items,
    onPhoneSelected = () => {},
    addToBasket = () => {},
  }) {
    this.element = element;
    this.items = items;
    this.onPhoneSelected = onPhoneSelected;
    this.addToBasket = addToBasket;

    this.element.addEventListener('click', (e) => {
      const detailsLink = e.target.closest('[data-element="details-link"]');
      const addBtn = e.target.closest('[data-element="add-to-basket"]');
      const phoneElement = e.target.closest('[data-element="phone-item"]');

      if (detailsLink) {
        e.preventDefault();
        this.onPhoneSelected(phoneElement.dataset.phoneId);
      } else if (addBtn) {
        this.addToBasket(phoneElement.dataset.name);
      }
    });

    this.render();
  }

  hide() {
    this.element.hidden = true;
  }

  show() {
    this.element.hidden = false;
  }


  render() {
    this.element.innerHTML = `  
    <ul class="phones">
      ${this.items
    .map(
      item => `<li class="card__holder" 
      data-phone-id="${item.id}"
      data-element="phone-item">
      <div class="phone__item">
        <img
          src="./${item.imageUrl}"
          alt=""
          class="phone__item-image"
          data-element="details-link"
        />
        <a href="/phones/${item.id}" class="phone__item-title" data-element="details-link">${item.name}</a>
        <p class="phone__item-article">${item.snippet}</p>
        <div class="phone__item-btnHolder">
          <div class="addBtn" data-element="add-to-basket">Add</div>
        </div>
      </div>
    </li>`,
    )
    .join('')}
    </ul>
    `;
  }
}
