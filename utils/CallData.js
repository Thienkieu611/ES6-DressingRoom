import {
  findIndexType,
  renderModel,
  renderNavPills,
} from "../controllers/main.js";
import { ChosenItem } from "../models/ChosenItem.js";
import { ListChosen } from "../models/ListChosen.js";

export class CallData {
  callData = () => {
    const promise = axios({
      url: ".././data/Data.json",
      method: "GET",
      responseType: "json",
    });

    promise.then(function (res) {
      //console.log(res.data);
      const arrNavPills = res.data.navPills;
      const arrTabPanes = res.data.tabPanes;

      //   console.log(arrNavPills);
      //   console.log(arrTabPanes);

      renderNavPills(arrNavPills, arrTabPanes);

      let listChosenItem = new ListChosen();

      //xử lý sự kiện btn thử đồ
      let arrChangeClother = [...document.querySelectorAll(".changeClother")];

      //console.log(arrChangeClother);
      //đi qua từng button và gán click cho từng button
      arrChangeClother.forEach((changeClother, index) => {
        changeClother.addEventListener("click", function () {
          //lấy giá trị từ các thuộc tính data trong button
          let id = changeClother.getAttribute("data-id");
          let type = changeClother.getAttribute("data-type");
          let name = changeClother.getAttribute("data-name");
          let desc = changeClother.getAttribute("data-desc");
          let imgJpg = changeClother.getAttribute("data-img-jpg");
          let imgPng = changeClother.getAttribute("data-img-png");

          let chosenItem = new ChosenItem(id, type, name, desc, imgJpg, imgPng);

          console.log(chosenItem);

          //check mảng array có tồn tại trong listChosen
          if (listChosenItem.listArray) {
            let i = findIndexType(chosenItem.type, listChosenItem.listArray);

            //Nếu đã tồn tại
            if (i !== -1) {
              listChosenItem.listArray[i] = chosenItem;
              console.log("chosenItem", chosenItem);
            } else {
              //chưa tồn tài thì thêm vào listchosen
              listChosenItem.addChosenItem(chosenItem);
            }
          }
          //console.log(listChosenItem.listArray);
          renderModel(listChosenItem.listArray);
        });
      });
    });

    promise.catch(function (err) {
      console.log(err);
    });
  };
}
//tạo đối tượng và gọi phương thức
const d = new CallData();
d.callData();
