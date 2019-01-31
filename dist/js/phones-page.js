import Header from "./components/header.js";
import Basket from "./components/basket.js";
import PhonesCatalog from "./components/phones-catalog.js";
import PhoneViewer from "./components/phone-viewer.js";
import Services from "./components/services.js";

export default class PhonesPage {
  constructor({ element }) {
    this.element = element;

    this.render();

    this.header = new Header({
      element: document.querySelector(".header")
    });

    this.basket = new Basket({
      icon: document.querySelector(".header__basket"),
      element: document.querySelector(".basket"),
      items: [],
      itemsCounter: 0,
      open: document.querySelector(".header__basket")
    });

    this.catalog = new PhonesCatalog({
      element: this.element.querySelector('[data-component="phone-catalog"]'),
      items: Services.getAll(),

      onPhoneSelected: phoneId => {
        const phoneDetails = Services.getById(phoneId);
        this.catalog.hide();
        this.viewer.show(phoneDetails);
      },
      addToBasket: phoneId => {
        this.basket.items.push(phoneId);
        this.basket.render();
      }
    });

    this.viewer = new PhoneViewer({
      element: this.element.querySelector('[data-component="phone-viewer"]'),
      onCatalog: () => {
        this.catalog.show();
        this.viewer.hide();
      },
      addToBasket: phoneId => {
        this.basket.items.push(phoneId);
        this.basket.render();
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
