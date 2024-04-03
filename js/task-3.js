'use strict';
{
  let task = '3';
  console.log(`----------------task-${task}--------------------`);
  {
    class StringBuilder {
      #value;
      constructor(initialValue) {
        this.#value = initialValue;
      }
      getValue() {
        return this.#value;
      } //— повертає поточне значення приватної властивості value.
      padEnd(str) {
        this.#value = this.#value + str;
      } //— отримує параметр str(рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
      padStart(str) {
        this.#value = str + this.#value;
      } //— отримує параметр str(рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
      padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
      } //— отримує параметр str(рядок) і додає його на початок і в кінець значення приватної властивості  value об'єкта, який викликає цей метод.
    }

    const builder = new StringBuilder('.');
    console.log(builder.getValue()); // "."
    builder.padStart('^');
    console.log(builder.getValue()); // "^."
    builder.padEnd('^');
    console.log(builder.getValue()); // "^.^"
    builder.padBoth('=');
    console.log(builder.getValue()); // "=^.^="
  }
  console.log(`----------------task-${task}--------------------`);
}