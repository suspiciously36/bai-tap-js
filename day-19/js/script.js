// Bài 1:
// Cách 1: sort hàm, index auto start-end
var integerArr = [4, 0, 9, 32, 21, 938, 57, 44, 99, 69, 777];

if (integerArr.length === 0) {
  console.log(
    (max = undefined),
    (maxIndex = -1),
    (min = undefined),
    (minIndex = -1)
  );
}

sortedIntegerArr = integerArr.sort((a, b) => a - b);

var min = sortedIntegerArr[0];
var minIndex = sortedIntegerArr.indexOf(min);

var max = sortedIntegerArr[sortedIntegerArr.length - 1];
var maxIndex = sortedIntegerArr.indexOf(max);

console.log(min, minIndex, max, maxIndex);

// Cách 2:
function findMinMaxAndPositions(arr) {
  if (arr.length === 0) {
    return {
      max: undefined,
      min: undefined,
      maxIndex: -1,
      minIndex: -1,
    };
  }

  var max = arr[0];
  var min = arr[0];
  var maxIndex = 0;
  var minIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    } else if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  return {
    max: max,
    min: min,
    maxIndex: maxIndex,
    minIndex: minIndex,
  };
}
// Test hàm
var integerArr = [4, 0, 9, 32, 21, 938, 57, 44, 99, 69, 777];
var result = findMinMaxAndPositions(integerArr);

console.log(`Số lớn nhất: ${result.max} (vị trí ${result.maxIndex})`);
console.log(`Số nhỏ nhất: ${result.min} (vị trí ${result.minIndex})`);





// Bài 2:

function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }

  if (num <= 3) {
    return true;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var numArr = [0, 2, 4, 13];

function primeAvg(arr) {
  if (!Array.isArray(arr)) {
    return `Nhập một mảng vào input`;
  } else {
    var total = 0;
    var primeArr = [];
    for (var j = 0; j < arr.length; j++) {
      if (isPrimeNumber(arr[j])) {
        primeArr.push(arr[j]);
        total += arr[j];
      }
    }
    if (primeArr.length === 0) {
      return `Mảng không có số nguyên tố`;
    } else {
      return `Trung bình số nguyên tố trong mảng = ${total / primeArr.length}`;
    }
  }
}

console.log(primeAvg(numArr));




// Bai 3:

var arr = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 9, 15, 15, 14, 69, 69, 96];

function filterArray(arr) {
  if (arr.length === 0) return `Mảng không có phần tử để lọc`;
  var newArr = [];
  for (var index in arr) {
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
}
console.log(filterArray(arr));




// Bai 4:

var integerArr = [5, 1, 9, 8, 10];
var element = 11;


function insertMoreNum(sortedArr, element) {
  sortedArr = integerArr.sort((a, b) => a - b);

  if (element >= sortedArr[sortedArr.length - 1]) {
    sortedArr.push(element);
  } else {
    for (var index in sortedArr) {
      if (element < sortedArr[index]) {
        sortedArr.splice(index, 0, element);
        break;
      }
    }
  }
  return sortedArr;
}

console.log(insertMoreNum(integerArr, element));
