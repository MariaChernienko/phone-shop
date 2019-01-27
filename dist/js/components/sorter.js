import Services from './services.js';
import PhonesCatalog from './phones-catalog.js';

export default class Sorter {
  constructor({ element }) {
    this.element = element;

    this.onFilter();

    this.render();
  }


  onFilter() {
    this.element.addEventListener('change', (e) => {
      const sortedArray = () => {
        if (e.target.value === 'alphabetical') {
          const sortAlphabethical = Services.getAll().map(a => Object.assign({}, a));
          sortAlphabethical.sort((a, b) => {
            if (a.id < b.id) {
              return -1;
            }
            return 1;
          });
          return sortAlphabethical;
        } if (e.target.value === 'newest') {
          return Services.getAll();
        }
      };
      this.catalog = new PhonesCatalog({
        element: document.querySelector('[data-component="phone-catalog"]'),
        items: sortedArray(),
        onPhoneSelected: (phoneId) => {
          let phoneDetails = Services.getById(phoneId);
          this.catalog.hide();
          this.viewer.show(phoneDetails);
        }
      });
    });
  }


  render() {
    this.element.innerHTML = `
      <span>Sort by:</span>
      <select>
        <option value="newest">Newest</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    `;
  }
}
