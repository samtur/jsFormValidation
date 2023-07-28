// Check zip code
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

  if (constraint.test(zipField.value)) {
    zipField.setCustomValidity("");
  } else {
    zipField.setCustomValidity(constraints[country][1]);
  }
}

// Running function on elements

const subscribBtn = document.querySelector(".subscribeBtn");

subscribBtn.addEventListener("click", checkZIP);
