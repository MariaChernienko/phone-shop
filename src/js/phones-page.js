import Header from './components/header.js';
import Basket from './components/basket.js';
import PhonesCatalog from './components/phones-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import Services from './components/services.js';

export default class PhonesPage {
  constructor({ element }) {
    this.element = element;

    this.render();

    this.header = new Header({
      element: document.querySelector('.header'),
      val: 0,
    });

    this.basket = new Basket({
      icon: document.querySelector('.header__basket'),
      itemsCounter: 0,
      element: document.querySelector('.basket'),
      title: 'Shopping Cart',
      items: [],
      open: document.querySelector('.header__basket'),
    });

    this.catalog = new PhonesCatalog({
      element: this.element.querySelector('[data-component="phone-catalog"]'),
      items: Services.getAll(),
      counter: this.basket.itemsCounter,

      onPhoneSelected: (phoneId) => {
        const phoneDetails = Services.getById(phoneId);
        this.catalog.hide();
        this.viewer.show(phoneDetails);
      },
      addToBasket: (phoneId) => {
        this.basket.items.push(phoneId);
        this.basket.itemsCounter = this.catalog.increaseBasket(this.counter);
        this.basket.render();
        this.basket.closeBasket();
      },
    });

    this.viewer = new PhoneViewer({
      element: this.element.querySelector('[data-component="phone-viewer"]'),
      items: Services.getAll(),
      counter: this.basket.itemsCounter,
      onCatalog: () => {
        this.catalog.show();
        this.viewer.hide();
      },
      addToBasket: (phoneId) => {
        this.basket.items.push(phoneId);
        this.basket.itemsCounter = this.catalog.increaseBasket(this.counter);
        this.basket.render();
        this.basket.closeBasket();
      }
    });
  }

  render() {
    this.element.innerHTML = `
      <div data-component="phone-catalog"></div>
      <div data-component="phone-viewer" hidden></div>
    `;
  }
}
