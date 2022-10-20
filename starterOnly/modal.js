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

// Get all the elements
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radios = document.getElementsByName("location");
const location6 = document.getElementById("location6");
const utils = document.getElementById("checkbox1");

// Error Messages

const errors = {
  firstName: "Veuillez entrer un prénom valide.",
  lastName: "Veuillez entrer un nom valide.",
  email: "Veuillez entrer un email valide.",
  location: "Veuillez selectionner une ville dans la liste.",
  utils: "Veuillez accepter les conditions générales d'utilisation.",
};

// Call back the message

const errorMessage = (e, message) => {
  const div = document.createElement("div");
  div.classList.add("form-alert");
  div.innerHTML = message;
  e.parentElement.append(div);
};

// Check the form

form.addEventListener("submit", (e) => {
  // Check if alredy an error, remove if alredy have one
  document.querySelectorAll(".form-alert").forEach((e) => e.remove());

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
    errorMessage(firstName, errors.firstName);
  }
  // If lastname not empty and do at least 2 chars
  if (!lastName.value || lastName.value.length <= 1) {
    errorMessage(lastName, errors.lastName);
  }
  // If mail is valid
  if (!testEmail) {
    errorMessage(email, errors.email);
  }
  // If a radio is checked
  const radioChecked = document.querySelector('input[name="location"]:checked');
  if (!radioChecked) {
    errorMessage(location6, errors.location);
  }
  // If the utils are checked
  if (!utils.checked) {
    errorMessage(utils, errors.utils);
  }

  // If all ok, display the confirmation
  if (
    firstName.value &&
    lastName.value &&
    testEmail &&
    radioChecked &&
    utils.checked
  ) {
    form.remove();
    document.getElementById("confirm").style.display = "flex";
  }
});
