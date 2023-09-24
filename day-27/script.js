const cartContainer = document.querySelector("#cart");
const cartBody = document.querySelector("#cart-body");
const itemsBody = document.querySelector("#items-body");
const addBtn = document.querySelector(".add-btn");
const updateBtn = document.querySelector("#update-btn");

const items = [
  {
    id: 1,
    price: 1000,
    name: "Sản phẩm 1",
    addQuantity: 1,
  },
  {
    id: 2,
    price: 2000,
    name: "Sản phẩm 2",
    addQuantity: 1,
  },
  {
    id: 3,
    price: 3000,
    name: "Sản phẩm 3",
    addQuantity: 1,
  },
  {
    id: 4,
    price: 4000,
    name: "Sản phẩm 4",
    addQuantity: 1,
  },
];

let cartArr = [];

const renderItems = () => {
  let html = "";
  items.forEach((item, index) => {
    html += `<tr>
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>
      <input type="number" value="${
        item.addQuantity
      }" onchange="onAddQuantityChange(${item.id})" id="sp${item.id}" />
      <button class="add-btn" onclick="onAddClick(${
        item.id
      })">Thêm vào giỏ</button>
    </td>
  </tr>`;
  });
  itemsBody.innerHTML = html;
};

const renderCart = () => {
  let newStr = ``;
  let numberOfItems = 0;
  let totalPrice = 0;
  cartArr.forEach((item, index) => {
    newStr += `<tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td width="10%">
        <input type="number" onchange="onUpdateCart(${item.id})" class="sp${
      item.id
    }" value="${item.quantity}"/>
        </td>
        <td>${item.price * item.quantity}</td>
        <td><button onclick="deleteCart(${item.id})">Xóa</button></td>
      </tr>`;
    numberOfItems += item.quantity;
    totalPrice += item.quantity * item.price;
  });

  newStr += `<tr>
    <td colspan="3">Tổng</td>
    <td >${numberOfItems}</td>
    <td colspan="2">${totalPrice}</td>
    </tr>`;

  cartBody.innerHTML = newStr;
};

function render() {
  renderItems();
  renderCart();
  if (cartArr.length) {
    cartContainer.classList.remove("empty-cart");
  } else {
    cartContainer.classList.add("empty-cart");
  }
}

render();

function add(item, quantity) {
  const existingItem = cartArr.find((addedItem) => addedItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += quantity;
    if (existingItem.quantity < 1) {
      cartArr.filter((i) => i.id !== item.id);
    }
  } else {
    cartArr.push({
      ...item,
      quantity,
    });
  }

  render();
}

function deleteCart(id) {
  cartArr.forEach((item, index) => {
    if (item.id === id) {
      if (confirm(`Are you sure`) == true) {
        alert(`Xóa giỏ hàng thành công!`);
      }
      cartArr.splice(index, 1);
    }
  });

  render();
}

function onUpdateCart(id) {
  const quantity = Number(document.querySelector(`.sp${id}`)?.value);
  cartArr.forEach((item, index) => {
    if (item.id === id) {
      if (quantity > 0) {
        cartArr[index] = {
          ...item,
          quantity: quantity,
        };
      } else cartArr.splice(index, 1);
    }
  });

  render();
}

updateBtn.addEventListener("click", onUpdateCart);

function deleteAll() {
  if (confirm(`Are you sure`) == true) {
    alert(`Xóa giỏ hàng thành công!`);
    cartContainer.classList.add("empty-cart");
  }
}

function onAddClick(id) {
  const item = items.find((i) => i.id === id);
  if (!item) return;
  const quantity = Number(document.querySelector(`#sp${id}`)?.value);
  if (Number.isNaN(quantity)) {
    console.log({ quantity });
    return;
  }
  add(item, quantity);
}

function onAddQuantityChange(id) {
  const item = items.find((i) => i.id === id);
  if (!item) return;
  const quantity = Number(document.querySelector(`#sp${id}`)?.value);
  item.addQuantity = quantity;
}
