const form = document.querySelector("form");

// Check zip code
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span.error");

zip.addEventListener("input", (e) => {
  checkZIP();
  if (!zip.validity.valid) {
    e.preventDefault();
  }
});

form.addEventListener("submit", (e) => {
  checkZIP();
  if (!zip.validity.valid) {
    e.preventDefault();
  }
});

function checkZIP() {
  const constraints = {
    uk: [
      "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})",
      "Please enter a valid UK zip code. ",
    ],
    us: ["^d{5}(?:[-s]d{4})?$", "Please enter a valid US zip code."],
    fr: ["^(F-)?\\d{5}$", "Please enter a valid French zip code."],
    de: ["^(D-)?\\d{5}$", "Please enter a valid German zip code."],
  };

  const country = document.getElementById("country").value;
  const zipField = document.getElementById("zip");
  const constraint = new RegExp(constraints[country][0], "");

  if (constraint.test(zipField.value)) {
    zip.validity.valid = true;
    zipError.textContent = "";
    zipError.className = "error";
  } else {
    zip.validity.valid = false;
    zipError.textContent = constraints[country][1];
    zipError.className = "error active";
  }
}

// Check Email

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an email.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email.";
  }
  emailError.className = "error active";
}

// Check Password
const pass = document.querySelector("#password");
const passError = document.querySelector("#password + span.error");

pass.addEventListener("input", (e) => {
  checkPass();
  if (!pass.validity.valid) {
    e.preventDefault();
  }
});

function checkPass() {
  const constraintArray = [
    "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    "Eight characters, letters.",
  ];

  const constraint = new RegExp(constraintArray[0], "");

  if (constraint.test(pass.value)) {
    pass.validity.valid = true;
    passError.textContent = "";
    passError.className = "error";
  } else {
    pass.validity.valid = false;
    passError.textContent = constraintArray[1];
    passError.className = "error active";
  }
}
