import Services from "./services.js";
import PhonesCatalog from "./phones-catalog.js";

export default class Searcher {
  constructor({ element }) {
    this.element = element;

    this.render();

    this.element.addEventListener("keyup", e => {
      let g = this.debounce(this.onSearch, 300);
      g(e.target.value);
    });
  }

  debounce(f, ms) {
    let timer = null;
    return (...args) => {
      const onComplete = () => {
        f.apply(this, args);
        timer = null;
      };
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(onComplete, ms);
    };
  }

  onSearch(val) {
    let result = Services.getAll().filter(
      element => element.id.indexOf(val.toLowerCase()) !== -1
    );
    this.catalog = new PhonesCatalog({
      element: document.querySelector('[data-component="phone-catalog"]'),
      items: result,
      onPhoneSelected: phoneId => {
        let phoneDetails = Services.getById(phoneId);
        this.catalog.hide();
        this.viewer.show(phoneDetails);
      }
    });
  }

  render() {
    this.element.innerHTML = `
      <span>Search</span> <input type="text" />
    `;
  }
}
