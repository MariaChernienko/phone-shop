import Header from './components/header.js';
import Searcher from './components/searcher.js';
import Basket from './components/basket.js';
import PhonesCatalog from './components/phones-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import Services from './components/services.js';
import Sorter from './components/sorter.js';


export default class PhonesPage {
  constructor({ element }) {
    this.element = element;

    this.render();

    this.header = new Header({
      element: document.querySelector('.header'),
      val: 0,
    });

    this.searcher = new Searcher({
      element: document.querySelector('[data-element="searcher"]'),
    });
    this.sorter = new Sorter({
      element: document.querySelector('[data-element="sorter"]'),
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
      onPhoneSelected: (phoneId) => {
        let phoneDetails = Services.getById(phoneId);
        this.catalog.hide();
        this.viewer.show(phoneDetails);
      }, 
      
      addToBasket: (phoneId) => {
        this.basket.items.push(phoneId);
        this.basket.itemsCounter = this.basket.items.length;
        this.basket.render();
        this.basket.closeBasket();
      }
    });

    this.viewer = new PhoneViewer({
      element: this.element.querySelector('[data-component="phone-viewer"]'),
      onCatalog: () => {
        this.catalog.show();
        this.viewer.hide();
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


