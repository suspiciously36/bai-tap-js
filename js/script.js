// Bai 1:
function generateFibonacci(n, current = 0, next = 1, result = []) {
    if (n === 0) {
      return result;
    }
  
    result.push(current);
    return generateFibonacci(n - 1, next, current + next, result);
  }
  
  var n = 10; // Số lượng số Fibonacci cần hiển thị
  var fibonacciSequence = generateFibonacci(n);
  console.log(`Dãy fibonacci của ${n} số:`, fibonacciSequence);
  
// Bai 2:

    function reverseNumber(number) {
        var reversedNum = 0;
        if (Number.isInteger(number)) {
        while (number !== 0) {
            reversedNum = reversedNum * 10 + (number % 10); // Lấy chữ số cuối của biến number gán vào bên phải của biến reversedNum
            number = Math.floor(number / 10); // Lấy phần nguyên của biến number sau khi đã lấy mất số cuối ở bước trên
        }
        return reversedNum;
    } else console.log(`Nhập số nguyên nhé!`);
}

    var number = 12345;
    var reversedNumber = reverseNumber(number);
        console.log(reversedNumber);


// Bai 3:

function numberToWords(n) {
    if (n < 0 || n > 9999) {
        return "Số nằm ngoài khoảng cho phép";
    }

    var donVi = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    var chucDonVi = ["", "mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười năm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
    var chuc = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
    var nghin = ["", "nghìn"];

    function docBlock(num, block) {
        if (num === 0) {
            return "";
        }
        if (num < 10) {
            return donVi[num] + " " + block;
        }
        if (num < 20) {
            return chucDonVi[num] + " " + block;
        }
        if (num < 100) {
            return chuc[Math.floor(num / 10)] + " " + docBlock(num % 10, "");
        }
        return donVi[Math.floor(num / 100)] + " trăm " + docBlock(num % 100, "");
    }

    var result = "";
    for (var i = 0; i < 3; i++) {
        var blockNum = n % 1000;
        n = Math.floor(n / 1000);
        if (blockNum > 0) {
            result = docBlock(blockNum, nghin[i]) + " " + result;
        }
    }

    return result.trim();
}

// Test hàm
var result = numberToWords(9876);
console.log(result);
