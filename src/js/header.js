class Header {
  constructor({ element }) {
    this.element = element;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <div class="header__logo">
      <img src="./images/mobile-alt-solid.svg" alt="logo" />
      <span class="logo">phone shop</span>
    </div>
    <div class="header__search">
      <span>Search</span> <input type="text" />
    </div>
    <div class="header__sort">
      <span>Sort by:</span>
      <select>
        <option value="">Alphabetical</option>
        <option value="">Newest</option>
      </select>
    </div>
    <div class="header__basket">
      <img src="./images/cart-arrow-down-solid.svg" alt="basket" />
      <span>22</span>
    </div>
    `;
  }
}