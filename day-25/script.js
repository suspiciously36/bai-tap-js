//Tạo các element
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;

let carouselNav = carousel.querySelector(".carousel-nav");
let carouselDots = carousel.querySelector(".carousel-dots");

var carouselNextBtn = carousel.querySelector(".carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel-nav .prev");

// Lấy số lượng ảnh

let carouselItems = carouselInner.querySelectorAll(".item");

let renderDots = function (index = 0) {
  let dotsHtml = "";
  carouselItems.forEach(function (item, index2) {
    dotsHtml += `<span ${+index2 === +index ? 'class="active"' : ""}></span>`;
  });
  carouselDots.innerHTML = dotsHtml;
};

// if (carouselItems.length) {
//Tính kích thước 1 item
var itemWidth = carouselInner.clientWidth; //Lấy kích thước chiều rộng của 1 element

//Tính tổng kích thước các item
var totalWidth = carouselItems.length * itemWidth;

//Cập nhật css
carouselInner.style.width = `${totalWidth}px`;

//Render dots
// renderDots();

var position = 0;
//Lắng nghe sự kiện của nút next
carouselNextBtn.addEventListener("click", function () {
  //Khi bấm vào nút next => Trừ đi kích thước của 1 item

  if (Math.abs(position) + itemWidth * 2 > totalWidth) {
    return;
  }

  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
});

carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(position) < itemWidth) {
    return;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
});
// }
