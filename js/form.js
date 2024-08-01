const nameError = document.getElementById("nameSherkat-error");
const webSaitError = document.getElementById("sait-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const nameDarError = document.getElementById("name-error");
const sematError = document.getElementById("semat-error");
const aboutError = document.getElementById("about-error");
const buttonError = document.getElementById("button-error");
const button = document.querySelector("button");

let users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorege = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

function validateName() {
  const name = document.getElementById("sherkat-name").value;
  const user = {
    name: name,
  };

  if (!name) {
    nameError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else if (!name.match(/[a-zA-Zآ-ی\s]{4,15}$/)) {
    nameError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else {
    nameError.innerHTML = '<i class="fas fa-check-circle" id="i"></i>';
    users.push(user);
    return true;
  }
}

function validateSait() {
  const site = document.getElementById("sait").value;
  const user = {
    site: site,
  };

  if (!site) {
    webSaitError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else if (!site.match(/^(www.)+[a-zA-Z]{4,15}(\.[a-z]{2,3})/)) {
    webSaitError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else {
    webSaitError.innerHTML = '<i class="fas fa-check-circle" id="i"></i>';
    users.push(user);
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const user = {
    email: email,
  };

  if (!email) {
    emailError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else if (!email.match(/^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/)) {
    emailError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else {
    emailError.innerHTML = '<i class="fas fa-check-circle" id="i"></i>';
    users.push(user);
    return true;
  }
}

function validatePhone() {
  const phone = document.getElementById("phone").value;
  const user = {
    phone: phone,
  };

  if (!phone) {
    phoneError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else if (
    !phone.match(/^0(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
  ) {
    phoneError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else {
    phoneError.innerHTML = '<i class="fas fa-check-circle" id="i"></i>';
    users.push(user);
    return true;
  }
}

function validateNameDar() {
  const nameDar = document.getElementById("name").value;
  const user = {
    nameDarkhastdahandeh: nameDar,
  };

  if (!nameDar) {
    nameDarError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else if (!nameDar.match(/[a-zA-Zآ-ی\s]{4,15}$/)) {
    nameDarError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else {
    nameDarError.innerHTML = '<i class="fas fa-check-circle" id="i"></i>';
    users.push(user);
    return true;
  }
}

function validateSemat() {
  const semat = document.getElementById("semat").value;
  const user = {
    semat: semat,
  };

  if (!semat) {
    sematError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else if (!semat.match(/[a-zA-Zآ-ی\s]{4,15}$/)) {
    sematError.innerHTML = '<i class="fa fa-times"></i>';
    return false;
  } else {
    sematError.innerHTML = '<i class="fas fa-check-circle" id="i"></i>';
    users.push(user);
    return true;
  }
}

function validateAbout() {
  const about = document.getElementById("about").value;
  const required = 30;
  const left = required - about.length;
  const user = {
    about: about,
  };
  if (left > 0) {
    aboutError.innerHTML = left + "کاراکتر نیاز است";
    return false;
  }
  aboutError.innerHTML = '<i class="fas fa-check-circle" id="i"></i>';
  users.push(user);
  return true;
}

function validateForm(event) {
  event.preventDefault();
  if (
    !validateName() ||
    !validateSait() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateNameDar() ||
    !validateSemat() ||
    !validateAbout()
  ) {
    buttonError.style.display = "block";
    buttonError.innerHTML = "لطفا فرم را کامل کنید";
    setTimeout(function () {
      buttonError.style.display = "none";
    }, 3000);
    return false;
  } else {
    saveToLocalStorege();
    return true;
  }
}

button.addEventListener("click", validateForm);
