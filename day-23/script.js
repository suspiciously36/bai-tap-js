// Bai 1:

const total = (...args) =>
  args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
console.log(total([9, "2", "1", "a"]));
console.log(total([9, "2", "1"]));

// Bai 2:

Number.prototype.getCurrency = function (currencySymbol) {
  if (isNaN(this)) {
    return `Invalid Data!`;
  }

  return this.toLocaleString("vi-VN") + " " + currencySymbol;
};

var price1 = 12000;
console.log(price1.getCurrency("đ"));

var price2 = 12000000;
console.log(price2.getCurrency("đ"));

// Bai 3:

Array.prototype.push2 = function (...elements) {
  for (let i = 0; i < elements.length; i++) {
    this[this.length] = elements[i];
  }
  return this.length;
};

const myArray = [1, 2, 3];
console.log(myArray.push2(4, 5, 6));

// Bai 4:

Array.prototype.filter2 = function (callback) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

const numbers = [1, 2, 3, 4, 5, 6];
const getEvenNum = numbers.filter2(function (num) {
  return num % 2 === 0;
});

console.log(getEvenNum);

// Bai 5:

// Chua biet lam :(
