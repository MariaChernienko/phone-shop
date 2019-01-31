import Searcher from './searcher.js';
import Sorter from './sorter.js';

export default class Header {
  constructor({ element }) {
    this.element = element;

    this.render();

    this.searcher = new Searcher({
      element: document.querySelector('[data-element="searcher"]'),
    });
    this.sorter = new Sorter({
      element: document.querySelector('[data-element="sorter"]'),
    });
  }

  render() {
    this.element.innerHTML = `
    <div class="header__logo">
      <img src="./images/mobile-alt-solid.svg" alt="logo" />
      <span class="logo">phone shop</span>
    </div>
    <div class="header__search" data-element="searcher"></div>
    <div class="header__sort" data-element="sorter"></div>
    <div class="header__basket"></div>
    `;
  }
}