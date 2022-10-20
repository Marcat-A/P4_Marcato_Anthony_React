function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal

const onClose = () => {
  modalbg.style.display = "none";
};

// form
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const utils = document.getElementById("checkbox1");

// check from

form.addEventListener("submit", (e) => {
  // Create the email RegExp
  const regex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  // Test if that's a valid mail
  const testEmail = regex.test(email.value);
  // No refresh of the page
  e.preventDefault();
  // If firstname not empty and do at least 2 chars
  if (!firstName.value || firstName.value.length <= 1) {
    return false;
  }
  // If lastname not empty and do at least 2 chars
  if (!lastName.value || lastName.value.length <= 1) {
    return false;
  }
  // If mail is valid
  if (!testEmail) {
    return false;
  }
  // If a radio is checked
  for (const radio of locations) {
    if (radio.checked) {
      break;
    } else {
      return false;
    }
  }
  // If the utils are checked
  if (!utils.checked) {
    return false;
  }
});
