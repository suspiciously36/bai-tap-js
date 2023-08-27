// Bai 1:

let errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    },
    getError: function (field) {
        return Object.values(this[field])[0];
    }
}

console.log(errors.getError("name"));

// Bai 2:

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

let Customer = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};

let result = [];

function createCustomers(customers) {
  for (let key of customers) {
    new Customer(key.name, key.age, key.address);
    let getName = key.name.split(" ");
    getName.splice(1, getName.length - 2);
    key["shortName"] = getName.join(" ");
    result.push(key);
  }
  return result.sort((a, b) => a.age - b.age);
}
console.log(createCustomers(customers));

// Bai 3:

let User = function (name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
}
  
  const data = [];
  
  function handleRegister(name, password, email) {
    if (!name || !password || !email) {
      console.log("Thông tin không đủ. Vui lòng kiểm tra lại.");
      return;
    }
  
    function findExistingUser(user) {
      return user.email === email;
    }
  
    const existingUser = data.find(findExistingUser);
  
    if (existingUser) {
      console.log("Người dùng đã tồn tại.");
      return;
    }
  
    const newUser = new User(name, password, email);
    data.push(newUser);
    console.log("Đăng ký thành công.");
    return newUser;
  }
  
  function handleLogin(email, password) {
    function findUser(user) {
      return user.email === email && user.password === password;
    }
  
    const user = data.find(findUser);
  
    if (user) {
      console.log("Đăng nhập thành công.");
      return user;
    } else {
      console.log("Thông tin đăng nhập không hợp lệ.");
      return null;
    }
  }
  
  const dataRegister1 = handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
  const dataRegister2 = handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
  
  const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
  
  console.log("data =", data);
  console.log("dataLogin =", dataLogin);
  