//tạo hàm để render ra từng item cho navPills
const renderNavPillsItem = (navPills, activeClass) => {
  return `
    <li class="nav-item">
        <a class="nav-link btn-default ${activeClass}" data-toggle="pill"
        href="#${navPills.tabName}">${navPills.showName}</a>
    </li>`;
};

//hàm xử lý push các dữ liệu có cùng type vào arr
const pushTypeArray = (type, arrTabPanes) => {
  //input: loại dữ liệu muốn push và mảng cần push
  //output: arr
  let outputArr = [];
  arrTabPanes.map((tabPanes, index) => {
    if (tabPanes.type === type) {
      outputArr.push(tabPanes);
    }
  });
  return outputArr;
};

//hàm render ra từng item theo từng tab có trong nav
const renderTabPanesItem = (arrTabPanes) => {
  //input: Mảng
  //output: chuỗi các thẻ
  let outputContent = "";
  arrTabPanes.forEach((tabPanes, index) => {
    outputContent += `<div class="col-md-3">
        <div class="card text-center">
            <img src="${tabPanes.imgSrc_jpg}"/>
            <h4><b>${tabPanes.name}</b></h4>
            <button class="changeClother" data-id="${tabPanes.id}" data-type="${tabPanes.type}" data-name="${tabPanes.name}" data-desc="${tabPanes.desc}" data-img-jpg="${tabPanes.imgSrc_jpg}" data-img-png="${tabPanes.imgSrc_png}">Thử đồ</button>
        </div>
    </div>`;
  });
  return outputContent;
};

// data-id="${item.id}" data-type="${item.type}" data-name="${item.name}" data-desc="${item.desc}" data-imgsrcjpg="${item.imgSrc_jpg}"  data-imgsrcpng="${item.imgSrc_png}"

//hàm render xử lý push dữ liệu vào đúng tab của nó để hiện lên nội dung của từng tab trong nav
const renderContentTabPanes = (type, arrTabPanes) => {
  // input: mảng cần duyệt qua và type của từng obj
  //output: chuỗi chứa các thẻ
  let outputContent = "";

  //process
  let arrSameType = [];
  switch (type) {
    case "topclothes":
      {
        arrSameType = pushTypeArray(type, arrTabPanes); //push tyle cùng loại vào mảng
        outputContent = renderTabPanesItem(arrSameType);
      }
      break;
    case "botclothes":
      {
        arrSameType = pushTypeArray(type, arrTabPanes);
        outputContent = renderTabPanesItem(arrSameType);
      }
      break;
    case "shoes":
      {
        arrSameType = pushTypeArray(type, arrTabPanes);
        outputContent = renderTabPanesItem(arrSameType);
      }
      break;
    case "handbags":
      {
        arrSameType = pushTypeArray(type, arrTabPanes);
        outputContent = renderTabPanesItem(arrSameType);
      }
      break;
    case "necklaces":
      {
        arrSameType = pushTypeArray(type, arrTabPanes);
        outputContent = renderTabPanesItem(arrSameType);
      }
      break;
    case "hairstyle":
      {
        arrSameType = pushTypeArray(type, arrTabPanes);
        outputContent = renderTabPanesItem(arrSameType);
      }
      break;
    case "background":
      {
        arrSameType = pushTypeArray(type, arrTabPanes);
        outputContent = renderTabPanesItem(arrSameType);
      }
      break;
    default:
      outputContent = "ERROR";
      break;
  }
  return outputContent;
};

//tạo hàm render hiện ra đầy đủ nav và các tab chứa đầy đủ thông tin
export const renderNavPills = (arrNavPills, arrTabPanes) => {
  //input: mảng chứa các NavPills, TabPanes

  /* output: 
            - chuỗi chứa đầy đủ các nav
            - chuỗi chứa nội dung ở từng tab */

  let outputNavPills = "";
  let outputNavContent = "";

  //process
  //check active
  arrNavPills.map((navPills, index) => {
    let activeClass = "";
    let fadeClass = "";
    //check activeclass
    if (navPills.type === "topclothes") {
      activeClass = "active";
    } else {
      activeClass = "";
    }

    //check fadeclass
    if (navPills.type !== "topclothes") {
      fadeClass = "fade";
    } else {
      fadeClass = "";
    }

    outputNavPills += renderNavPillsItem(navPills, activeClass);
    outputNavContent += `<div class="tab-pane container ${activeClass} ${fadeClass}" id="${
      navPills.tabName
    }">
    <div>
      <div class="row">
      ${renderContentTabPanes(navPills.type, arrTabPanes)}
        </div>
      </div>
    </div>`;
  });
  document.querySelector(".nav-pills").innerHTML = outputNavPills;
  document.querySelector(".tab-content").innerHTML = outputNavContent;
  return outputNavPills, outputNavContent;
};

//tạo đối tượng cho listChosen
//let listChosenItem = new ListChosen();

//hàm tìm kiếm vị trí index của type. Nếu trong type đó đã tồn tại 1 sản phẩm, mà chọn thêm 1 sp khác cùng type, thì gán index đó cho sp mới
export const findIndexType = (type, listChosenItem) => {
  let indexType = -1;
  listChosenItem.forEach((listChosen, index) => {
    if (listChosen.type === type) {
      indexType = index;
    }
  });
  return indexType;
};

//render hiện ra hairstyle
const renderHairstyle = (image) => {
  document.querySelector(".hairstyle").style.background = `url(${image})`;
  document.querySelector(".hairstyle").style.width = "1000px";
  document.querySelector(".hairstyle").style.height = "1000px";
  document.querySelector(".hairstyle").style.position = "absolute";
  document.querySelector(".hairstyle").style.top = "-75%";
  document.querySelector(".hairstyle").style.right = "-57%";
  document.querySelector(".hairstyle").style.transform = "scale(0.17)";
};

//render hiện ra necklace
const renderNecklace = (image) => {
  document.querySelector(".necklace").style.background = `url(${image})`;
  document.querySelector(".necklace").style.width = "500px";
  document.querySelector(".necklace").style.height = "1050px";
  document.querySelector(".necklace").style.position = "absolute";
  document.querySelector(".necklace").style.top = "-35%";
  document.querySelector(".necklace").style.right = "-3.5%";
  document.querySelector(".necklace").style.transform = "scale(0.5)";
};

//render hiện ra bikinitop
const renderBikiniTop = (image) => {
  document.querySelector(".bikinitop").style.background = `url(${image})`;
  document.querySelector(".bikinitop").style.width = "500px";
  document.querySelector(".bikinitop").style.height = "500px";
  document.querySelector(".bikinitop").style.position = "absolute";
  document.querySelector(".bikinitop").style.top = "-10%";
  document.querySelector(".bikinitop").style.left = "-5%";
  document.querySelector(".bikinitop").style.zIndex = "3";
  document.querySelector(".bikinitop").style.transform = "scale(0.5)";
};
//render hiện ra bikinibottom
const renderBikiniBottom = (image) => {
  document.querySelector(".bikinibottom").style.width = "500px";
  document.querySelector(".bikinibottom").style.height = "1000px";
  document.querySelector(".bikinibottom").style.background = `url(${image})`;
  document.querySelector(".bikinibottom").style.position = "absolute";
  document.querySelector(".bikinibottom").style.top = "-30%";
  document.querySelector(".bikinibottom").style.left = "-5%";
  document.querySelector(".bikinibottom").style.zIndex = "2";
  document.querySelector(".bikinibottom").style.transform = "scale(0.5)";
};

//render hiện ra handbag
const renderHandbag = (image) => {
  document.querySelector(".handbag").style.background = `url(${image})`;
  document.querySelector(".handbag").style.width = "500px";
  document.querySelector(".handbag").style.height = "1000px";
  document.querySelector(".handbag").style.position = "absolute";
  document.querySelector(".handbag").style.top = "-30%";
  document.querySelector(".handbag").style.right = "-3.5%";
  document.querySelector(".handbag").style.transform = "scale(0.5)";
};

//render hiện ra feet
const renderFeet = (image) => {
  document.querySelector(".feet").style.width = "500px";
  document.querySelector(".feet").style.height = "1000px";
  document.querySelector(".feet").style.background = `url(${image})`;
  document.querySelector(".feet").style.position = "absolute";
  document.querySelector(".feet").style.top = "-30%";
  document.querySelector(".feet").style.right = "-3.5%";
  document.querySelector(".feet").style.transform = "scale(0.5)";
};

//render hiện ra background
const renderBackground = (image) => {
  document.querySelector(".background").style.backgroundImage = `url(${image})`;
};

//hàm render ra clother theo từng style mà người dùng ấn vào
export const renderModel = (listChosenItem) => {
  //input: mảng chứa tất cả sự lựa chọn từ ngừoi dùng
  //output: render tương ứng
  //process: duyệt qua từng lựa chọn, dựa vào type từng lựa chọn mà render ra màn hình phù hợp
  if (listChosenItem.length > 0) {
    listChosenItem.forEach((listChosen, index) => {
      if (listChosen.type === "topclothes") {
        renderBikiniTop(listChosen.imgSrc_png);
      }
      if (listChosen.type === "botclothes") {
        renderBikiniBottom(listChosen.imgSrc_png);
      }
      if (listChosen.type === "shoes") {
        renderFeet(listChosen.imgSrc_png);
      }
      if (listChosen.type === "handbags") {
        renderHandbag(listChosen.imgSrc_png);
      }
      if (listChosen.type === "necklaces") {
        renderNecklace(listChosen.imgSrc_png);
      }
      if (listChosen.type === "hairstyle") {
        renderHairstyle(listChosen.imgSrc_png);
      }
      if (listChosen.type === "background") {
        renderBackground(listChosen.imgSrc_png);
      }
    });
  }
};
