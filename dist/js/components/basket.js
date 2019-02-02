export default class Basket {
  constructor({
 icon, itemsCounter, element, items, open 
}) {
    this.icon = icon;
    this.itemsCounter = itemsCounter;
    this.element = element;
    this.items = items;
    this.open = open;

    this.render();
    this.countItems();

    this.open.addEventListener('click', (e) => {
      this.toggleBasket();
    });

    this.element.addEventListener('click', (e) => {
      const closeBasket = e.target.closest('[data-action="close"]');
      const deleteBtn = e.target.closest('[data-element="delete"]');
      const itemName = e.target.closest('[data-element="name"]');

      if (deleteBtn) {
        this.items.forEach((element) => {
          if (element.id === itemName.dataset.id) {
            element.counter--;
            this.render();
            this.toggleBasket();
            if (element.counter === 0) {
              this.items.splice(this.items.indexOf(element), 1);
              this.render();
              this.toggleBasket();
            }
          }
        });
      } else if (closeBasket) {
        this.toggleBasket();
      }
    });
  }

  toggleBasket() {
    this.element
      .querySelector('.basket__overlay')
      .classList.toggle('active_overlay');
    this.element
      .querySelector('.basket__content')
      .classList.toggle('active_content');
  }

  countItems() {
    let temp = 0;
    if (this.items.length === 0) {
      return 0;
    }
    this.items.forEach((element) => {
      temp += element.counter;
    });
    return temp;
  }

  render() {
    this.items = this.items.filter((a, b) => {
      if (this.items.indexOf(a) === b) {
        return true;
      }
      a.counter++;
    });

    this.itemsCounter = this.countItems();

    this.icon.innerHTML = `
      <img src="./images/cart-arrow-down-solid.svg" alt="basket" />
      <span>${this.itemsCounter}</span>
    `;
    this.element.innerHTML = `
    <div class="basket__overlay" data-action="close"></div>
    <div class="basket__content">
      <div class="basket__content-close" data-action="close"></div>
      <h3 class="basket__content-title">Shopping Cart</h3>
      <ul class="basket__content-list">
        ${this.items
    .map(
      item => `
              <li class="list-item" data-element="name" data-id=${item.id}>
                <h2 class="list-item__title">${item.name}</h2>
                <span class="list-item__counter">${item.counter}</span>
                <button class="list-item__remove" data-element="delete">x</button>
              </li>
            `,
    )
    .join('')}
      </ul>
    </div>
    `;
  }
}
