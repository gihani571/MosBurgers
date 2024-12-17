// VARIABLE-DECLARATIONS
let categoryList = document.querySelectorAll(".cards");
let itemDatabase = document.getElementById("itemDatabase");
let customerDatabase = document.getElementById("customerDatabase");
let menuContent = document.getElementById("pills-tabContent");
let ordersPane = document.getElementById("ordersPane");
let customerNameParent = document.getElementById("customerNameParent");

let tempID;
let orderListArray = [];

let oID = 1;
if (parseInt(sessionStorage.getItem("orderNumber")) == 1) {
  sessionStorage.setItem("orderNumber", oID);
}

// pop-ups
let addItemsPop = document.getElementsByClassName("addItems-container");
let addCustomersPop = document.getElementsByClassName("addCustomers-container");
let editItemsPop = document.getElementsByClassName("editItems-container");
let editCustomersPop = document.getElementsByClassName(
  "editCustomers-container"
);
let deleteConfirmationItemsPop = document.getElementsByClassName(
  "deleteConfirmationItems-container"
);
let deleteConfirmationCustomersPop = document.getElementsByClassName(
  "deleteConfirmationCustomers-container"
);
let orderConfirmationPop = document.getElementsByClassName(
  "orderConfirmation-container"
);

// data-arrays
let foodItemsArray = [
  [
    {
      category: "Burgers",
      itemCode: "B1001",
      itemName: "Classic Burger (L)",
      price: 1500,
      discount: 0,
      exp: "",
      itemImage: "img/Classic Burger.webp",
    },
    {
      category: "Burgers",
      itemCode: "B1002",
      itemName: "Classic Burger (R)",
      price: 750,
      discount: 15,
      exp: "",
      itemImage: "img/Classic Burger.webp",
    },
    {
      category: "Burgers",
      itemCode: "B1003",
      itemName: "Turkey Burger",
      price: 1600,
      discount: 0,
      exp: "",
      itemImage: "img/Turkey Burger.webp",
    },
    {
      category: "Burgers",
      itemCode: "B1004",
      itemName: "Chicken Burger (L)",
      price: 1400,
      discount: 0,
      exp: "",
      itemImage: "img/Chicken Burger.jpg",
    },
    {
      category: "Burgers",
      itemCode: "B1005",
      itemName: "Chicken Burger (R)",
      price: 800,
      discount: 20,
      exp: "",
      itemImage: "img/Chicken Burger.jpg",
    },
    {
      category: "Burgers",
      itemCode: "B1006",
      itemName: "Cheese Burger (L)",
      price: 1000,
      discount: 0,
      exp: "",
      itemImage: "img/Cheese Burger.webp",
    },
    {
      category: "Burgers",
      itemCode: "B1007",
      itemName: "Cheese Burger (R)",
      price: 600,
      discount: 0,
      exp: "",
      itemImage: "img/Cheese Burger.webp",
    },
    {
      category: "Burgers",
      itemCode: "B1008",
      itemName: "Bacon Burger",
      price: 650,
      discount: 15,
      exp: "",
      itemImage: "img/Bacon Burger.jpg",
    },
    {
      category: "Burgers",
      itemCode: "B1009",
      itemName: "Shawarma Burger",
      price: 800,
      discount: 0,
      exp: "",
      itemImage: "img/Shawarma Burger.jpg",
    },
    {
      category: "Burgers",
      itemCode: "B1010",
      itemName: "Olive Burger",
      price: 1800,
      discount: 0,
      exp: "",
      itemImage: "img/Olive Burger.jpg",
    },
    {
      category: "Burgers",
      itemCode: "B1012",
      itemName: "Double-Cheese Burger",
      price: 1250,
      discount: 20,
      exp: "",
      itemImage: "img/Double cheese burger.jpeg",
    },
    {
      category: "Burgers",
      itemCode: "B1013",
      itemName: "Crispy Chicken Burger (R)",
      price: 1200,
      discount: 0,
      exp: "",
      itemImage: "img/Crispy Chicken Burger.jpg",
    },
    {
      category: "Burgers",
      itemCode: "B1014",
      itemName: "Crispy Chicken Burger (L)",
      price: 1600,
      discount: 10,
      exp: "",
      itemImage: "img/Crispy Chicken Burger.jpg",
    },
    {
      category: "Burgers",
      itemCode: "B1015",
      itemName: "Paneer Burger",
      price: 900,
      discount: 0,
      exp: "",
      itemImage: "img/Paneer Burger.jpg",
    },
  ],
  [
    {
      category: "Submarines",
      itemCode: "B1016",
      itemName: "Crispy Chicken Submarine (L)",
      price: 2000,
      discount: 0,
      exp: "",
      itemImage: "img/Crispy Chicken Submarine.jpeg",
    },
    {
      category: "Submarines",
      itemCode: "B1017",
      itemName: "Crispy Chicken Submarine (R)",
      price: 1500,
      discount: 0,
      exp: "",
      itemImage: "img/Crispy Chicken Submarine.jpeg",
    },
    {
      category: "Submarines",
      itemCode: "B1018",
      itemName: "Chicken Submarine (L)",
      price: 1800,
      discount: 3,
      exp: "",
      itemImage: "img/Chicken Submarine.jpg",
    },
    {
      category: "Submarines",
      itemCode: "B1019",
      itemName: "Chicken Submarine (R)",
      price: 1400,
      discount: 0,
      exp: "",
      itemImage: "img/Chicken Submarine.jpg",
    },
    {
      category: "Submarines",
      itemCode: "B1020",
      itemName: "Grinder Submarine",
      price: 2300,
      discount: 0,
      exp: "",
      itemImage: "img/Grinder Submarine.jpg",
    },
    {
      category: "Submarines",
      itemCode: "B1021",
      itemName: "Cheese Submarine",
      price: 2200,
      discount: 0,
      exp: "",
      itemImage: "img/Cheese Submarine.jpeg",
    },
    {
      category: "Submarines",
      itemCode: "B1022",
      itemName: "Double Cheese n Chicken Submarine",
      price: 1900,
      discount: 16,
      exp: "",
      itemImage: "img/Double Cheese n Chicken Submarine.jpg",
    },
    {
      category: "Submarines",
      itemCode: "B1023",
      itemName: "Special Horgie Submarine",
      price: 2800,
      discount: 0,
      exp: "",
      itemImage: "img/Special Horgie Submarine.jpg",
    },
    {
      category: "Submarines",
      itemCode: "B1024",
      itemName: "MOS Special Submarine",
      price: 3000,
      discount: 0,
      exp: "",
      itemImage: "img/MOS Special Submarine.jpg",
    },
  ],
  [
    {
      category: "Fries",
      itemCode: "B1025",
      itemName: "Steak Fries (L)",
      price: 1200,
      discount: 0,
      exp: "",
      itemImage: "img/Steak Fries.jpeg",
    },
    {
      category: "Fries",
      itemCode: "B1026",
      itemName: "Steak Fries (M)",
      price: 600,
      discount: 0,
      exp: "",
      itemImage: "img/Steak Fries.jpeg",
    },
    {
      category: "Fries",
      itemCode: "B1027",
      itemName: "French Fries (L)",
      price: 800,
      discount: 0,
      exp: "",
      itemImage: "img/French Fries.webp",
    },
    {
      category: "Fries",
      itemCode: "B1028",
      itemName: "French Fries (M)",
      price: 650,
      discount: 0,
      exp: "",
      itemImage: "img/French Fries.webp",
    },
    {
      category: "Fries",
      itemCode: "B1029",
      itemName: "French Fries (S)",
      price: 450,
      discount: 0,
      exp: "",
      itemImage: "img/French Fries.webp",
    },
    {
      category: "Fries",
      itemCode: "B1030",
      itemName: "Sweet Potato Fries (L)",
      price: 600,
      discount: 0,
      exp: "",
      itemImage: "img/Sweet Potato Fries.jpg",
    },
  ],
  [
    {
      category: "Pasta",
      itemCode: "B1031",
      itemName: "Chicken n Cheese Pasta",
      price: 1600,
      discount: 15,
      exp: "",
      itemImage: "img/Chicken n Cheese Pasta.webp",
    },
    {
      category: "Pasta",
      itemCode: "B1032",
      itemName: "Chicken Penne Pasta",
      price: 1700,
      discount: 0,
      exp: "",
      itemImage: "img/Chicken Penne Pasta.jpg",
    },
    {
      category: "Pasta",
      itemCode: "B1033",
      itemName: "Ground Turkey Pasta Bake",
      price: 2900,
      discount: 10,
      exp: "",
      itemImage: "img/Ground Turkey Pasta Bake.jpg",
    },
    {
      category: "Pasta",
      itemCode: "B1034",
      itemName: "Creamy Shrimp Pasta",
      price: 2900,
      discount: 0,
      exp: "",
      itemImage: "img/Creamy Shrimp Pasta.jpg",
    },
    {
      category: "Pasta",
      itemCode: "B1035",
      itemName: "Lemon Butter Pasta",
      price: 1950,
      discount: 0,
      exp: "",
      itemImage: "img/Lemon Butter Pasta.jpg",
    },
    {
      category: "Pasta",
      itemCode: "B1036",
      itemName: "Tagliatelle Pasta",
      price: 2400,
      discount: 1,
      exp: "",
      itemImage: "img/Tagliatelle Pasta.jpg",
    },
    {
      category: "Pasta",
      itemCode: "B1037",
      itemName: "Baked Ravioli",
      price: 3000,
      discount: 1,
      exp: "",
      itemImage: "img/Baked Ravioli.jpg",
    },
  ],
  [
    {
      category: "Chicken",
      itemCode: "B1038",
      itemName: "Fried Chicken (S)",
      price: 1200,
      discount: 0,
      exp: "",
      itemImage: "img/Fried Chicken.jpg",
    },
    {
      category: "Chicken",
      itemCode: "B1039",
      itemName: "Fried Chicken (R)",
      price: 2300,
      discount: 10,
      exp: "",
      itemImage: "img/Fried Chicken.jpg",
    },
    {
      category: "Chicken",
      itemCode: "B1040",
      itemName: "Fried Chicken (L)",
      price: 3100,
      discount: 5,
      exp: "",
      itemImage: "img/Fried Chicken.jpg",
    },
    {
      category: "Chicken",
      itemCode: "B1041",
      itemName: "Hot Wings (L)",
      price: 2400,
      discount: 0,
      exp: "",
      itemImage: "img/Hot Wings.jpg",
    },
    {
      category: "Chicken",
      itemCode: "B1042",
      itemName: "Devilled Chicken (L)",
      price: 900,
      discount: 0,
      exp: "",
      itemImage: "img/Devilled Chicken.jpg",
    },
    {
      category: "Chicken",
      itemCode: "B1043",
      itemName: "BBQ Chicken (R)",
      price: 2100,
      discount: 0,
      exp: "",
      itemImage: "img/BBQ Chicken.jpg",
    },
  ],
  [
    {
      category: "Beverages",
      itemCode: "B1044",
      itemName: "Pepsi (330ml)",
      price: 990,
      discount: 5,
      exp: "",
      itemImage: "img/Pepsi (330ml).jpg",
    },
    {
      category: "Beverages",
      itemCode: "B1045",
      itemName: "Coca-Cola (330ml)",
      price: 1230,
      discount: 0,
      exp: "",
      itemImage: "img/Coca-Cola (330ml).jpg",
    },
    {
      category: "Beverages",
      itemCode: "B1046",
      itemName: "Sprite (330ml)",
      price: 1500,
      discount: 3,
      exp: "",
      itemImage: "img/Sprite (330ml).jpg",
    },
    {
      category: "Beverages",
      itemCode: "B1047",
      itemName: "Mirinda (330ml)",
      price: 850,
      discount: 7,
      exp: "",
      itemImage: "img/Mirinda (330ml).webp",
    },
  ],
];
let customersArray = [];
let orderInformationArrayFood = [];
let orderInformationArray = [];

if (JSON.parse(sessionStorage.getItem("customerDatabase")) == null) {
  sessionStorage.setItem("customerDatabase", JSON.stringify(customersArray));
}

if (JSON.parse(sessionStorage.getItem("foodDatabase")) == null) {
  sessionStorage.setItem("foodDatabase", JSON.stringify(foodItemsArray));
}

if (JSON.parse(sessionStorage.getItem("ordersDatabase")) == null) {
  sessionStorage.setItem(
    "ordersDatabase",
    JSON.stringify(orderInformationArray)
  );
}

if (JSON.parse(sessionStorage.getItem("ordersFoodDatabase")) == null) {
  sessionStorage.setItem(
    "ordersFoodDatabase",
    JSON.stringify(orderInformationArrayFood)
  );
}

// FUNCTIONS

// FUNCTIONS-MENU
//search-function
function resetItemSearch() {
  document.getElementById("searchPanel").style.display = `none`;
  document.getElementById("itemSearch").value = "";
  for (let index = 0; index < categoryList.length; index++) {
    categoryList[index].style.maxHeight = `575px`;
  }
}
function getDataMenu(index, subIndex) {
  foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));
  for (let index = 0; index < categoryList.length; index++) {
    categoryList[index].style.maxHeight = `350px`;
  }

  document.getElementById(
    "category"
  ).innerText = `Category : ${foodItemsArray[index][subIndex].category}`;
  document.getElementById(
    "itemCode"
  ).innerText = `ItemCode : ${foodItemsArray[index][subIndex].itemCode}`;
  document.getElementById(
    "itemName"
  ).innerText = `ItemName : ${foodItemsArray[index][subIndex].itemName}`;
  document.getElementById(
    "price"
  ).innerText = `Price : ${foodItemsArray[index][subIndex].price}.00`;
  document.getElementById(
    "discount"
  ).innerText = `Discount : ${foodItemsArray[index][subIndex].discount}%`;
  document.getElementById(
    "exp"
  ).innerText = `EXP Date : ${foodItemsArray[index][subIndex].exp}`;
  document.getElementById(
    "itemImage"
  ).src = `${foodItemsArray[index][subIndex].itemImage}`;

  document.getElementById("searchPanel").style.display = `block`;
}
function searchItems() {
  foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));
  let searchData = document.getElementById("itemSearch").value;
  if (searchData.charAt(0) == "B" && searchData.length == 5) {
    for (let index = 0; index < foodItemsArray.length; index++) {
      for (
        let subIndex = 0;
        subIndex < foodItemsArray[index].length;
        subIndex++
      ) {
        if (foodItemsArray[index][subIndex].itemCode == searchData) {
          getDataMenu(index, subIndex);
          return;
        }
      }
    }
  } else {
    for (let index = 0; index < foodItemsArray.length; index++) {
      for (
        let subIndex = 0;
        subIndex < foodItemsArray[index].length;
        subIndex++
      ) {
        if (foodItemsArray[index][subIndex].itemName == searchData) {
          getDataMenu(index, subIndex);
          return;
        }
      }
    }
  }
}

//item-data-loading-to-menu
function loadItemDataToMenu() {
  foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));
  for (let index = 0; index < foodItemsArray.length; index++) {
    let x = document.getElementById(`${foodItemsArray[index][0].category}`);
    if (x != null) {
      x.replaceChildren();
    }
    for (let subIndex = 0; subIndex < foodItemsArray[index].length; subIndex++) {
      let exp = foodItemsArray[index][subIndex].exp;
      let state;
      if (isExpired(exp)) {
        state = " - EXPIRED";
      } else {
        state = "";
      }
      let item = `<div class="col">
                      <div class="card mb-3 me-xl-4 border-0" onclick="addToOrderList(this)" id="${foodItemsArray[index][subIndex].itemCode}">
                        <img
                          src="${foodItemsArray[index][subIndex].itemImage}"
                          class="card-img-top rounded-3 img-fluid"
                          alt="..."
                          width="16%"
                        />
                        <div class="card-body px-1 py-1">
                          <p class="card-title text-start fw-medium my-0 py-0">
                            ${foodItemsArray[index][subIndex].itemName} <span class="text-danger fw-bold">${state}</span>
                          </p>
                          <p class="text-start fw-bolder my-0 py-0">
                            Rs.<span>${foodItemsArray[index][subIndex].price}</span>.00
                          </p>
                        </div>
                      </div>
                    </div>`;
      x.innerHTML += item;
    }
  }
}

//customer-data-loading
function loadCustomerDataToMenu() {
  customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));
  if (customersArray.length != 0) {
    let x = document.getElementById("customerDropdown");
    if (x != null) {
      x.replaceChildren();
    }
    for (let index = 0; index < customersArray.length; index++) {
      let customer = `<li><a class="dropdown-item" id="${customersArray[index].customerCode}" onclick="setCustomerName(this)">${customersArray[index].customerName}</a></li>`;
      x.innerHTML += customer;
    }
  }
}

//set-customer-name
function setCustomerName(element) {
  customerNameParent.replaceChildren();

  customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));
  let arrayIndex = searchCustomerByID(element.id);

  let name = `<div id="${customersArray[arrayIndex].customerCode}" class="currentCustomer">
                <h5
                      class="mx-xl-4 mx-lg-2 text-muted text-truncate fw-bold"
                      style="font-family: 'Courier New', Courier, monospace"
                 >${customersArray[arrayIndex].customerName}</h5>
              </div>`;
  customerNameParent.innerHTML += name;
}

//add-items-to-order-list-array
function addToOrderList(element) {
  tempID = element.id;
  foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));

  let quantity = 1;
  let index;
  let subIndex;

  L: for (index = 0; index < foodItemsArray.length; index++) {
    for (subIndex = 0; subIndex < foodItemsArray[index].length; subIndex++) {
      if (tempID == foodItemsArray[index][subIndex].itemCode) {
        if (isExpired(foodItemsArray[index][subIndex].exp)) {
          const toastLiveExample = document.getElementById("toastExpiredItem");
          const toastBootstrap =
            bootstrap.Toast.getOrCreateInstance(toastLiveExample);
          toastBootstrap.show();
          return;
        } else {
          break L;
        }
      }
    }
  }

  enableCheckoutBtn();

  L: if (orderListArray.length != 0) {
    for (let id = 0; id < orderListArray.length; id++) {
      if (orderListArray[id].itemCode == tempID) {
        orderListArray[id].quantity++;
        displayOrderList();
        return;
      }
    }
  }

  let order = {
    itemCode: foodItemsArray[index][subIndex].itemCode,
    itemName: foodItemsArray[index][subIndex].itemName,
    price: foodItemsArray[index][subIndex].price,
    discount: foodItemsArray[index][subIndex].discount,
    quantity: quantity,
  };
  orderListArray.push(order);
  displayOrderList();
}

//display-items-to-order-list
function displayOrderList() {
  ordersPane.replaceChildren();

  let amount = 0;
  let discount = 0;
  let finalAmount = 0;

  for (let index = 0; index < orderListArray.length; index++) {
    let orderItem = `<li class="my-3 singleLineList">
                    ${orderListArray[index].itemName} (${
      orderListArray[index].quantity
    })
                    <span class="text-danger fw-bold mx-3">${
                      orderListArray[index].price *
                      orderListArray[index].quantity
                    }.00</span>
                    <button type="button" class="btn btn-sm btn-danger rounded-pill px-3 ms-1" onclick="deleteItemsFromOrder(this)" id="${
                      orderListArray[index].itemCode
                    }">-</button>
                  </li>`;

    amount += orderListArray[index].price * orderListArray[index].quantity;
    discount +=
      orderListArray[index].price *
      (orderListArray[index].discount / 100) *
      orderListArray[index].quantity;
    finalAmount = amount - discount;
    ordersPane.innerHTML += orderItem;
  }

  let stringAmount = amount.toFixed(2);
  let stringDiscount = discount.toFixed(2);
  let stringFinalAmount = finalAmount.toFixed(2);

  document.getElementById("totalCost").innerText = `Rs. ${stringAmount}`;
  document.getElementById("totalDiscount").innerText = `Rs. ${stringDiscount}`;
  document.getElementById("finalAmount").innerText = `Rs. ${stringFinalAmount}`;
}

//delete-items-from-the-order-list
function deleteItemsFromOrder(element) {
  tempID = element.id;
  L: for (let index = 0; index < orderListArray.length; index++) {
    if (orderListArray[index].itemCode == tempID) {
      if (orderListArray[index].quantity == 1) {
        orderListArray.splice(index, 1);
      } else {
        orderListArray[index].quantity--;
      }
      break L;
    }
  }

  if (orderListArray.length == 0) {
    disableCheckoutBtn();
    document.getElementById("totalCost").innerText = "";
    document.getElementById("totalDiscount").innerText = "";
    document.getElementById("finalAmount").innerText = "";
    ordersPane.replaceChildren();
    return;
  }
  displayOrderList();
}

//order-confirmation-window-management
function orderConfirmationWindowOpen() {
  orderConfirmationPop[0].style.display = "block";
  document.getElementById("confirmTotalAmount").innerText =
    document.getElementById("finalAmount").innerText;
}
function orderConfirmationWindowClose() {
  orderConfirmationPop[0].style.display = "none";
}
function orderConfirmed() {
  customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));

  orderInformationArrayFood = JSON.parse(
    sessionStorage.getItem("ordersFoodDatabase")
  );
  orderInformationArray = JSON.parse(sessionStorage.getItem("ordersDatabase"));
  oID = sessionStorage.getItem("orderNumber")
    ? parseInt(sessionStorage.getItem("orderNumber"))
    : 1;

  let orderID = generateOrderID(oID);
  let customerName;
  let customerTel;

  if (customerNameParent.childNodes.length > 0) {
    let x = document.getElementsByClassName("currentCustomer");
    let arrayIndex = searchCustomerByID(x[0].id);
    customerName = customersArray[arrayIndex].customerName;
    customerTel = customersArray[arrayIndex].customerTel;
  } else {
    customerName = "";
    customerTel = "";
  }

  let totalCost = document.getElementById("totalCost").innerText;
  let totalDiscount = document.getElementById("totalDiscount").innerText;
  let finalAmount = document.getElementById("finalAmount").innerText;

  let orderInfo = {
    orderID: orderID,
    customerName: customerName,
    customerTel: customerTel,
    totalCost: totalCost,
    totalDiscount: totalDiscount,
    finalAmount: finalAmount,
  };

  orderInformationArray.push(orderInfo);
  orderInformationArrayFood.push(orderListArray);

  sessionStorage.setItem(
    "ordersFoodDatabase",
    JSON.stringify(orderInformationArrayFood)
  );

  sessionStorage.setItem(
    "ordersDatabase",
    JSON.stringify(orderInformationArray)
  );

  orderConfirmationWindowClose();

  generatePDF();

  document.getElementById("totalCost").innerText = "";
  document.getElementById("totalDiscount").innerText = "";
  document.getElementById("finalAmount").innerText = "";
  document.getElementById("customerNameParent").replaceChildren();
  document.getElementById("ordersPane").replaceChildren();
  disableCheckoutBtn();

  setTimeout(() => {
    const toastLiveExample = document.getElementById("toastOrderCompletion");
    const toastBootstrap =
      bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  }, 500);
}

// FUNCTIONS-REPORT
function loadOrdersToReport() {
  document.getElementById("tableData").replaceChildren();

  orderInformationArray = JSON.parse(sessionStorage.getItem("ordersDatabase"));
  orderInformationArrayFood = JSON.parse(
    sessionStorage.getItem("ordersFoodDatabase")
  );
  if (
    orderInformationArray.length != 0 ||
    orderInformationArrayFood.length != 0
  ) {
    let tableData = document.getElementById("tableData");
    for (let index = 0; index < orderInformationArray.length; index++) {
      retrieveSearchData(index, tableData);
    }
  }
}

// reset-order-data-from-the-table
function resetOrderData() {
  disableSearchBtn();
  loadOrdersToReport();
  document.getElementById("orderSearch").value = "";
}

// search-by-customers
function searchOrder() {
  document.getElementById("tableData").replaceChildren();

  orderInformationArray = JSON.parse(sessionStorage.getItem("ordersDatabase"));
  orderInformationArrayFood = JSON.parse(
    sessionStorage.getItem("ordersFoodDatabase")
  );

  let tableData = document.getElementById("tableData");

  let searchData = document.getElementById("orderSearch").value;
  if (searchData.charAt(0) == "C" && searchData.length == 5) {
    for (let index = 0; index < orderInformationArray.length; index++) {
      if (orderInformationArray[index].customerCode == searchData) {
        retrieveSearchData(index, tableData);
        enableSearchBtn();
      }
    }
  } else {
    for (let index = 0; index < orderInformationArray.length; index++) {
      if (orderInformationArray[index].customerName == searchData) {
        retrieveSearchData(index, tableData);
        enableSearchBtn();
      }
    }
  }
}

function retrieveSearchData(index, tableData) {
  let tableContent = "";
  let tableItemContent = "";
  let tableItemNamesContent = "";
  for (let x = 0; x < orderInformationArrayFood[index].length; x++) {
    tableItemContent += `<li>${orderInformationArrayFood[index][x].itemCode} (${orderInformationArrayFood[index][x].quantity}) = ${orderInformationArrayFood[index][x].price}x${orderInformationArrayFood[index][x].quantity}</li>`;
    tableItemNamesContent += `<li>${orderInformationArrayFood[index][x].itemName}</li>`;
  }

  tableContent += `<tr>
                  <td>${orderInformationArray[index].orderID}</td>
                  <td>
                    <ul class="list-unstyled">
                      <li>${orderInformationArray[index].customerName}</li>
                      <li>${orderInformationArray[index].customerTel}</li>
                    </ul>
                  </td>
                  <td>
                    <ul class="list-unstyled">
                      ${tableItemContent}
                    </ul>
                  </td>
                  <td>
                    <ul class="list-unstyled">
                      ${tableItemNamesContent}
                    </ul>
                  </td>
                  <td>${orderInformationArray[index].totalDiscount}</td>
                  <td>${orderInformationArray[index].finalAmount}</td>
                </tr>`;
  tableData.innerHTML += tableContent;
}

// FUNCTIONS-UPDATE
// add-items-window-management
function addItemsWindowOpen() {
  addItemsPop[0].style.display = "block";

  let addItemsForm = document.getElementById("addItems-form");
  addItemsForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}
function addItemsWindowClose() {
  addItemsPop[0].style.display = "none";
}
function addItems() {
  let addItemsForm = document.getElementById("addItems-form");
  if (addItemsForm.checkValidity()) {
    foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));
    let category = document.getElementById("addItemCategory");
    let option = category.options[category.selectedIndex].text;
    let index;
    switch (option) {
      case "Burgers":
        index = 0;
        break;
      case "Submarines":
        index = 1;
        break;
      case "Fries":
        index = 2;
        break;
      case "Pasta":
        index = 3;
        break;
      case "Chicken":
        index = 4;
        break;
      case "Beverages":
        index = 5;
        break;
    }

    let itemCode = document.getElementById("addItemCode").value;
    let itemName = document.getElementById("addItemName").value;
    let price = document.getElementById("addItemPrice").value;
    let discount = document.getElementById("addItemDiscount").value;
    let exp;
    if (document.getElementById("addItemEXP").value != null) {
      exp = document.getElementById("addItemEXP").value;
    } else {
      exp = "";
    }

    for (
      let subIndex = 0;
      subIndex < foodItemsArrayfoodItemsArray[index].length;
      subIndex++
    ) {
      if (
        foodItemsArrayfoodItemsArray[index][subIndex].itemCode == itemCode ||
        foodItemsArrayfoodItemsArray[index][subIndex].itemName == itemName
      ) {
        const toastLiveExample = document.getElementById("liveToast");
        const toastBootstrap =
          bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastBootstrap.show();
        return;
      }
    }

    let item = {
      category: `${option}`,
      itemCode: `${itemCode}`,
      itemName: `${itemName}`,
      price: `${price}`,
      discount: `${discount}`,
      exp: `${exp}`,
      itemImage: "img/Default.png",
    };

    foodItemsArray[index].push(item);
    sessionStorage.setItem("foodDatabase", JSON.stringify(foodItemsArray));

    addItemsWindowClose();
    loadItemsToDatabase();

    addItemsForm.reset();
  }
}

//add-customer-window-management
function addCustomersWindowOpen() {
  addCustomersPop[0].style.display = "block";

  let addCustomersForm = document.getElementById("addCustomers-form");
  addCustomersForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}
function addCustomersWindowClose() {
  addCustomersPop[0].style.display = "none";
}
function addCustomers() {
  let addCustomersForm = document.getElementById("addCustomers-form");
  if (addCustomersForm.checkValidity()) {
    customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));
    let customerCode = document.getElementById("addCustomerCode").value;
    let customerName = document.getElementById("addCustomerName").value;
    let customerTel = document.getElementById("addCustomerTel").value;
    let customerEmail = document.getElementById("addCustomerEmail").value;

    for (let index = 0; index < customersArray.length; index++) {
      if (customersArray[index].customerCode == customerCode) {
        const toastLiveExample = document.getElementById("liveToast");
        const toastBootstrap =
          bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastBootstrap.show();
        return;
      }
    }

    let user = {
      customerCode: `${customerCode}`,
      customerName: `${customerName}`,
      customerTel: `${customerTel}`,
      customerEmail: `${customerEmail}`,
    };

    customersArray.push(user);
    sessionStorage.setItem(
      "customerDatabase",
      JSON.stringify(customersArray)
    );

    addCustomersWindowClose();
    loadCustomersToDatabase();

    let addCustomerForm = document.getElementById("addCustomers-form");
    addCustomerForm.reset();
  }
}

//edit-items-window-management
function editItemsWindowOpen(element) {
  tempID = element.id;
  foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));
  editItemsPop[0].style.display = "block";

  let editItemsForm = document.getElementById("editItems-form");
  editItemsForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  let index;
  let subIndex;
  L: for (index = 0; index < foodItemsArray.length; index++) {
    for (subIndex = 0; subIndex < foodItemsArray[index].length; subIndex++) {
      if (tempID == foodItemsArray[index][subIndex].itemCode) {
        break L;
      }
    }
  }
  document.getElementById(
    "editItemCategory"
  ).innerText = `${foodItemsArray[index][subIndex].category}`;
  document.getElementById(
    "editItemCode"
  ).value = `${foodItemsArray[index][subIndex].itemCode}`;
  document.getElementById(
    "editItemName"
  ).value = `${foodItemsArray[index][subIndex].itemName}`;
  document.getElementById(
    "editItemPrice"
  ).value = `${foodItemsArray[index][subIndex].price}.00`;
  document.getElementById(
    "editItemDiscount"
  ).value = `${foodItemsArray[index][subIndex].discount}`;

  if (foodItemsArray[index][subIndex].exp != null) {
    document.getElementById(
      "editItemEXP"
    ).value = `${foodItemsArray[index][subIndex].exp}`;
  }
}
function editItemsWindowClose() {
  editItemsPop[0].style.display = "none";
}
function updateItem() {
  let editItemsForm = document.getElementById("editItems-form");
  if (editItemsForm.checkValidity()) {
    foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));
    let index;
    let subIndex;
    L: for (index = 0; index < foodItemsArray.length; index++) {
      for (subIndex = 0; subIndex < foodItemsArray[index].length; subIndex++) {
        if (tempID == foodItemsArray[index][subIndex].itemCode) {
          break L;
        }
      }
    }

    if (
      document.getElementById("editItemName").value !=
      foodItemsArray[index][subIndex].itemName
    ) {
      foodItemsArray[index][subIndex].itemName =
        document.getElementById("editItemName").value;
    }

    if (
      document.getElementById("editItemPrice").value !=
      foodItemsArray[index][subIndex].price
    ) {
      foodItemsArray[index][subIndex].price =
        document.getElementById("editItemPrice").value;
    }
    if (
      document.getElementById("editItemDiscount").value !=
      foodItemsArray[index][subIndex].discount
    ) {
      foodItemsArray[index][subIndex].discount =
        document.getElementById("editItemDiscount").value;
    }
    if (
      document.getElementById("editItemEXP").value !=
        foodItemsArray[index][subIndex].exp &&
      document.getElementById("editItemEXP").value != null
    ) {
      foodItemsArray[index][subIndex].exp =
        document.getElementById("editItemEXP").value;
    }
    sessionStorage.setItem("foodDatabase", JSON.stringify(foodItemsArray));

    editItemsWindowClose();
    loadItemsToDatabase();
  }
}

//edit-customers-window-management
function editCustomersWindowOpen(element) {
  tempID = element.id;
  customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));
  editCustomersPop[0].style.display = "block";

  let editCustomersForm = document.getElementById("editCustomers-form");
  editCustomersForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  let index;
  L: for (index = 0; index < customersArray.length; index++) {
    if (tempID == customersArray[index].customerCode) {
      break L;
    }
  }
  document.getElementById(
    "editCustomerCode"
  ).value = `${customersArray[index].customerCode}`;
  document.getElementById(
    "editCustomerName"
  ).value = `${customersArray[index].customerName}`;
  document.getElementById(
    "editCustomerTel"
  ).value = `${customersArray[index].customerTel}`;
  document.getElementById(
    "editCustomerEmail"
  ).value = `${customersArray[index].customerEmail}`;
}
function editCustomersWindowClose() {
  editCustomersPop[0].style.display = "none";
}
function updateCustomer() {
  let editCustomersForm = document.getElementById("editCustomers-form");
  if (editCustomersForm.checkValidity()) {
    customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));
    let index;
    L: for (index = 0; index < customersArray.length; index++) {
      if (tempID == customersArray[index].customerCode) {
        break L;
      }
    }

    if (
      document.getElementById("editCustomerName").value !=
      customersArray[index].customerName
    ) {
      customersArray[index].customerName =
        document.getElementById("editCustomerName").value;
    }

    if (
      document.getElementById("editCustomerTel").value !=
      customersArray[index].customerTel
    ) {
      customersArray[index].customerTel =
        document.getElementById("editCustomerTel").value;
    }
    if (
      document.getElementById("editCustomerEmail").value !=
      customersArray[index].customerEmail
    ) {
      customersArray[index].customerEmail =
        document.getElementById("editCustomerEmail").value;
    }

    sessionStorage.setItem(
      "customerDatabase",
      JSON.stringify(customersArray)
    );

    editCustomersWindowClose();
    loadCustomersToDatabase();
  }
}

//items-delete-window-management
function deleteConfirmationItemsWindowOpen(element) {
  tempID = element.id;
  deleteConfirmationItemsPop[0].style.display = "block";
}
function deleteConfirmationItemsWindowClose() {
  deleteConfirmationItemsPop[0].style.display = "none";
}
function deleteItems() {
  foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));
  for (let index = 0; index < foodItemsArray.length; index++) {
    for (let subIndex = 0; subIndex < foodItemsArray[index].length; subIndex++) {
      if (tempID == foodItemsArray[index][subIndex].itemCode) {
        foodItemsArray[index].splice(subIndex, 1);
        sessionStorage.setItem("foodDatabase", JSON.stringify(foodItemsArray));
        deleteConfirmationItemsWindowClose();
        loadItemsToDatabase();
        return;
      }
    }
  }
}

//customers-delete-window-management
function deleteConfirmationCustomersWindowOpen(element) {
  tempID = element.id;
  deleteConfirmationCustomersPop[0].style.display = "block";
}
function deleteConfirmationCustomersWindowClose() {
  deleteConfirmationCustomersPop[0].style.display = "none";
}
function deleteCustomers() {
  customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));
  for (let index = 0; index < customersArray.length; index++) {
    if (tempID == customersArray[index].customerCode) {
      customersArray.splice(index, 1);
      sessionStorage.setItem(
        "customerDatabase",
        JSON.stringify(customersArray)
      );
      deleteConfirmationCustomersWindowClose();
      loadCustomersToDatabase();
      return;
    }
  }
}

//data-loading-to-database
function loadItemsToDatabase() {
  foodItemsArray = JSON.parse(sessionStorage.getItem("foodDatabase"));
  itemDatabase.replaceChildren();

  for (let index = 0; index < foodItemsArray.length; index++) {
    for (let subIndex = 0; subIndex < foodItemsArray[index].length; subIndex++) {
      let exp = foodItemsArray[index][subIndex].exp;
      let state;
      if (isExpired(exp)) {
        state = "EXPIRED";
      } else {
        state = "";
      }
      let item = `<li class="fw-bold my-3">
                    ${foodItemsArray[index][subIndex].itemCode} -
                    ${foodItemsArray[index][subIndex].itemName} <span class="text-danger">${state}</span>
                    <button type="button" class="btn btn-sm btn-success ms-5 me-1 rounded-pill px-3" onclick="editItemsWindowOpen(this)" id="${foodItemsArray[index][subIndex].itemCode}">i</button
                    ><button type="button" class="btn btn-sm btn-danger rounded-pill px-3" onclick="deleteConfirmationItemsWindowOpen(this)" id="${foodItemsArray[index][subIndex].itemCode}">-</button>
                  </li>`;
      itemDatabase.innerHTML += item;
    }
  }
}
function loadCustomersToDatabase() {
  customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));
  customerDatabase.replaceChildren();
  for (let index = 0; index < customersArray.length; index++) {
    let customer = `<li class="fw-bold my-3">
                    ${customersArray[index].customerCode} -
                    ${customersArray[index].customerName}
                    <button type="button" class="btn btn-sm btn-success ms-5 me-1 rounded-pill px-3" onclick="editCustomersWindowOpen(this)" id="${customersArray[index].customerCode}">i</button>
                    <button type="button" class="btn btn-sm btn-danger rounded-pill px-3" onclick="deleteConfirmationCustomersWindowOpen(this)" id="${customersArray[index].customerCode}">-</button>
                  </li>`;
    customerDatabase.innerHTML += customer;
  }
}

// LOGICAL-FUNCTIONS
function isExpired(exp) {
  if (exp) {
    let expDate = new Date(exp);
    let currentDate = new Date();
    if (expDate > currentDate) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
function generateOrderID(OrderNumber) {
  let temp = OrderNumber.toString().padStart(4, "0");
  temp = "C" + temp;
  oID++;
  sessionStorage.setItem("orderNumber", oID);
  return temp;
}
function searchCustomerByID(customerID) {
  customersArray = JSON.parse(sessionStorage.getItem("customerDatabase"));
  for (let index = 0; index < customersArray.length; index++) {
    if (customersArray[index].customerCode == customerID) {
      return index;
    }
  }
}
function enableCheckoutBtn() {
  document.getElementById("checkoutBtn").disabled = false;
}
function disableCheckoutBtn() {
  document.getElementById("checkoutBtn").disabled = true;
}
function enableSearchBtn() {
  document.getElementById("searchBtn").disabled = false;
}
function disableSearchBtn() {
  document.getElementById("searchBtn").disabled = true;
}
function generatePDF() {
  orderInformationArray = JSON.parse(sessionStorage.getItem("ordersDatabase"));
  orderInformationArrayFood = JSON.parse(
    sessionStorage.getItem("ordersFoodDatabase")
  );

  let ArrayLength = orderInformationArray.length;
  
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("MOS-BURGERS RECEIPT", 70, 10);
  doc.text(`ORDER ID - ${orderInformationArray[ArrayLength-1].orderID}`, 20, 30);
  doc.text(`${year}-${month}-${day} | ${hours}:${minutes}:${seconds}`, 20, 40);

  let num=70;
  for (let index = 0; index < orderInformationArrayFood[ArrayLength-1].length; index++) {
    doc.text(`${orderInformationArrayFood[ArrayLength-1][index].itemCode} ${orderInformationArrayFood[ArrayLength-1][index].itemName} (${orderInformationArrayFood[ArrayLength-1][index].quantity}) - Rs.${orderInformationArrayFood[ArrayLength-1][index].price}.00`, 10, num); 
    num+=10;
  }

  doc.text(`Total - ${orderInformationArray[ArrayLength-1].totalCost}`, 40, num+20);
  doc.text(`Discount - ${orderInformationArray[ArrayLength-1].totalDiscount}`, 40, num+30);
  doc.text(`Amount - ${orderInformationArray[ArrayLength-1].finalAmount}`, 40, num+40);

  doc.save("MOS_BURGERS.pdf");
}
