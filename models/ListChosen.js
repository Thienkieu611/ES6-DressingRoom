export class ListChosen {
  constructor() {
    this.listArray = new Array();
  }
  addChosenItem = (ChosenItem) => {
    this.listArray.push(ChosenItem);
  };
}
