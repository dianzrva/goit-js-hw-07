'use strict';
{
  let task = '2';
  console.log(`----------------task-${task}--------------------`);
  {
    class Storage {
      #items = ['Nanitoids', 'Prolonger', 'Antigravitator'];
      getItems() {
        return this.#items;
      } //— повертає масив поточних товарів у приватній властивості items.
      addItem(newItem) {
        this.#items.push(newItem);
      } // — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
      removeItem(itemToRemove) {
        this.#items = this.#items.filter(function (item) {
          return item !== itemToRemove;
        });
      } //— приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
    }
    const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
    console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
    storage.addItem('Droid');
    console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
    storage.removeItem('Prolonger');
    console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  }
  console.log(`----------------task-${task}--------------------`);
}