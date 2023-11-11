export class ListChosen {
  constructor() {
    this.listArray = new Array();
  }
  //phương thức này dùng để thêm mục đã chọn vào array
  addChosenItem = (ChosenItem) => {
    this.listArray.push(ChosenItem);
  };
}
