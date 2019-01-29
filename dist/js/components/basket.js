export default class Basket {
  constructor({
    icon,
    itemsCounter,
    element,
    title,
    items,
    open,
  }) {
    this.icon = icon;
    this.itemsCounter = itemsCounter;
    this.element = element;
    this.title = title;
    this.items = items;
    this.open = open;

    this.render();
    this.closeBasket();
    this.openBasket();

  }

  render() {

    this.items = this.items.filter((a, b) => {
      if (this.items.indexOf(a) === b) {
        return true;
      } a.counter++;
    });

    this.icon.innerHTML = `
      <img src="./images/cart-arrow-down-solid.svg" alt="basket" />
      <span>${this.itemsCounter}</span>
    `;
    this.element.innerHTML = `
    <div class="basket__overlay"></div>
    <div class="basket__content">
      <div class="basket__content-close"></div>
      <h3 class="basket__content-title">${this.title}</h3>
      <ul class="basket__content-list">
        ${this.items
    .map(item => `<li>${item.name}## ${item.counter}<button>x</button></li>`)
    .join('')}
      </ul>
    </div>
    `;
  }

  openBasket() {
    this.open.addEventListener('click', (e) => {
      document
        .querySelector('.basket__overlay')
        .classList.add('active_overlay');
      document
        .querySelector('.basket__content')
        .classList.add('active_content');
    });
  }

  closeBasket() {
    document
      .querySelector('.basket__content-close')
      .addEventListener('click', (e) => {
        document
          .querySelector('.basket__overlay')
          .classList.remove('active_overlay');
        document
          .querySelector('.basket__content')
          .classList.remove('active_content');
      });
    }
  }

  

