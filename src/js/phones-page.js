import Header from './components/header.js';
import Searcher from './components/searcher.js';
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
    });

    this.searcher = new Searcher({
      element: document.querySelector('[data-element="searcher"]'),
      // items: Services.getAll(),
      // onSort: (items, inputValue) => {
      //   return items.filter(element => element.id.indexOf(inputValue.toLowerCase()) !== -1);
      // }
      
      
    });

    this.basket = new Basket({
      element: document.querySelector('.basket'),
      title: 'Shopping Cart',
      items: [
        'Samsung Galaxy S9',
        'Samsung Galaxy S9',
        'Samsung Galaxy S9',
        'Samsung Galaxy S9',
      ],
      open: document.querySelector('.header__basket'),
    });

    this.catalog = new PhonesCatalog({
      element: this.element.querySelector('[data-component="phone-catalog"]'),
      items: Services.getAll(),
      onPhoneSelected: (phoneId) => {
        let phoneDetails = Services.getById(phoneId);
        this.catalog.hide();
        this.viewer.show(phoneDetails);
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


