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

  console.log(constraint);
  console.log(zipField.value);

  if (constraint.test(zipField.value)) {
    // zipField.setCustomValidity("");
    zip.validity.valid = true;
    zipError.textContent = "";
    console.log("valid");
    zipError.className = "error";
  } else {
    zip.validity.valid = false;
    // zipField.setCustomValidity(constraints[country][1]);
    zipError.textContent = constraints[country][1];
    console.log("invalid");
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

// Running function on elements

// const subscribBtn = document.querySelector(".subscribeBtn");
// subscribBtn.addEventListener("click", checkZIP);
