

export default class Difference {
  constructor(oldOfficer, newOfficer, items){
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItmes = this.newOfficer.querySelectorAll(items);
      this.oldCounter = 0;
      this.newCounter = 0;
    } catch(err){}
  }

  bindTriggers(officer, items, counter) {
    officer.querySelector('.plus').addEventListener('click', ()=> {
      if(counter !== items.length - 2) {
        items[counter].style.display = 'flex';
        counter++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length - 1].remove();
      }
    });
  }

  //officer__card-item
  hideItems (education) {
      education.forEach((item, i, arr) => {
      if(i !== arr.length - 1) { //последний элемент не скроется со страницы
        item.style.display = 'none';
      }
    });
  }

  init() {
    try{
      this.hideItems(this.oldItems);
      this.hideItems(this.newItmes);
      this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bindTriggers(this.newOfficer, this.newItmes, this.newCounter);
    } catch(err){}
  }
}