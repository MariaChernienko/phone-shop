import Services from './services.js';
import PhonesCatalog from './phones-catalog.js';

export default class Searcher {
  constructor({ element }) {
    this.element = element;
    
    this.render();
    this.onSort();
    
  }
 
  onSort() {
    this.element.addEventListener('keyup', (e) => {
      if (e.keyCode == 13) {
        let result = Services.getAll().filter(element => element.id.indexOf(e.target.value.toLowerCase()) !== -1);
        this.catalog = new PhonesCatalog({
          element: document.querySelector('[data-component="phone-catalog"]'),
          items: result,
          onPhoneSelected: (phoneId) => {
            let phoneDetails = Services.getById(phoneId);
            this.catalog.hide();
            this.viewer.show(phoneDetails);
          }
        });
      }
    });
  }

  render() {
    this.element.innerHTML = `
      <span>Search</span> <input type="text" />
    `;
  }
}
