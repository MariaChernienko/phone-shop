class Basket {
  constructor({
 element, title, items, open 
}) {
    this.element = element;
    this.title = title;
    this.items = items;
    this.open = open;

    this.render();
    this.closeBasket();
    this.openBasket();
  }

  render() {
    this.element.innerHTML = `
    <div class="basket__overlay"></div>
    <div class="basket__content">
      <div class="basket__content-close"></div>
      <h3 class="basket__content-title">${this.title}</h3>
      <ul class="basket__content-list">
        ${this.items
    .map(item => `<li>${item} <span>(2)</span><button>x</button></li>`)
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
