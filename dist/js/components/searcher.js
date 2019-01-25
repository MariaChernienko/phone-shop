import Services from './services.js';

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
        console.log(result);
        return result;
      }
    });
  }
 
   
  

  render() {
    this.element.innerHTML = `
      <span>Search</span> <input type="text" />
    `;
  }
}
