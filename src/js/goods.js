class Goods {
  constructor({ element, items }) {
    this.element = element;
    this.items = items;

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <ul class="phones">
      ${this.items
    .map(
      item => `<li class="card__holder">
      <div class="phone__item">
        <img
          src="./images/motorola-xoom-with-wi-fi.0.jpg"
          alt=""
          class="phone__item-image"
        />
        <h3 class="phone__item-title">${item.name}</h3>
        <p class="phone__item-article">${item.snippet}</p>
        <div class="phone__item-btnHolder">
          <div class="addBtn">Add</div>
        </div>
      </div>
    </li>`,
    )
    .join('')}
    </ul>
    `;
  }
}
