
const header = new Header({
  element: document.querySelector('.header'),
});

const basket = new Basket({
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

const shop = new Goods({
  element: document.querySelector('.content'),
  items: getServices,
});
