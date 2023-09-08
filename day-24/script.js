// Selecting Elements

const loginEl = document.querySelector(".user-wrap .login-btn");
const overlayEl = document.querySelector(".overlay");
const loginRegisterFormEl = document.querySelector(".login-register");

const loginBtnEl = document.querySelector(".login-register_btn .login-btn");
const registerBtnEl = document.querySelector(
  ".login-register_btn .register-btn"
);

const formLoginEl = document.querySelector(".login-register .form-login");
const formRegisterEl = document.querySelector(".login-register .form-register");

const eyeOnEl = document.querySelectorAll(".fa-eye");
const eyeOffEl = document.querySelectorAll(".fa-eye-slash");

const inputPasswordEl = document.querySelectorAll(".password");
const inputEmailEl = document.querySelectorAll(".email");
const inputFullNameEl = document.querySelectorAll(".text");

const formLoginBtnEl = document.querySelector(".form-login .btn");
const formRegisterBtnEl = document.querySelector(".form-register .btn");

const errorEl = document.querySelectorAll(".error");

// Function

const formOn = function () {
  overlayEl.classList.remove("hidden");
  loginRegisterFormEl.classList.remove("hidden");
};

const formOff = function () {
  overlayEl.classList.add("hidden");
  loginRegisterFormEl.classList.add("hidden");
};

const switchLogin = function () {
  formLoginEl.classList.remove("hidden");
  formRegisterEl.classList.add("hidden");
  loginBtnEl.classList.add("active");
  registerBtnEl.classList.remove("active");
};

const switchRegister = function () {
  formLoginEl.classList.add("hidden");
  formRegisterEl.classList.remove("hidden");
  loginBtnEl.classList.remove("active");
  registerBtnEl.classList.add("active");
};

// On/Off Form

loginEl.addEventListener("click", formOn);
overlayEl.addEventListener("click", formOff);

// Switching login/register tabs

loginBtnEl.addEventListener("click", switchLogin);
registerBtnEl.addEventListener("click", switchRegister);

// On/Off Password Hidden

eyeOnEl.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.add("hidden");
    eyeOffEl.forEach(function (item) {
      item.classList.remove("hidden");
    });
    inputPasswordEl.forEach(function (item) {
      item.type = "text";
    });
  });
});

eyeOffEl.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.add("hidden");
    eyeOnEl.forEach(function (item) {
      item.classList.remove("hidden");
    });
    inputPasswordEl.forEach(function (item) {
      item.type = "password";
    });
  });
});

//  Checking info

inputEmailEl.forEach(function (item) {
  item.addEventListener("blur", function () {
    if (item.value === "") {
      item.classList.add("error-input");
      errorEl.forEach(function (item) {
        item.classList.remove("hidden");
      });
    } else {
      item.classList.remove("error-input");
      errorEl.forEach(function (item) {
        item.classList.add("hidden");
      });
    }
  });
});

inputPasswordEl.forEach(function (item) {
  item.addEventListener("blur", function () {
    if (item.value === "") {
      item.classList.add("error-input");
      errorEl.forEach(function (item) {
        item.classList.remove("hidden");
      });
    } else {
      item.classList.remove("error-input");
      errorEl.forEach(function (item) {
        item.classList.add("hidden");
      });
    }
  });
});

inputFullNameEl.forEach(function (item) {
  item.addEventListener("blur", function () {
    if (item.value === "") {
      item.classList.add("error-input");
      errorEl.forEach(function (item) {
        item.classList.remove("hidden");
      });
    } else {
      item.classList.remove("error-input");
      errorEl.forEach(function (item) {
        item.classList.add("hidden");
      });
    }
  });
});
