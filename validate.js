const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const genderInputs = document.getElementsByName("gender");
const dobInput = document.getElementById("dob");
const addressInput = document.getElementById("address");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Please enter ur name";
    isValid = false;
  }

  const Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailInput.value.trim() === "") {
    document.getElementById("emailError").textContent = "Please enter ur email";
    isValid = false;
  } else if (!Regex.test(emailInput.value)) {
    document.getElementById("emailError").textContent = "invalid email";
    isValid = false;
  }

  if (mobileInput.value.trim() === "") {
    document.getElementById("mobileError").textContent =
      "Mobile number is required";
    isValid = false;
  } else if (mobileInput.value.length !== 10) {
    document.getElementById("mobileError").textContent =
      "Mobile number must be exactly 10 digits";
    isValid = false;
  }

  let genderSelected = false;
  genderInputs.forEach((input) => {
    if (input.checked) {
      genderSelected = true;
    }
  });
  if (!genderSelected) {
    document.getElementById("genderError").textContent = "Pkease select gender";
    isValid = false;
  }

  if (dobInput.value.trim() === "") {
    document.getElementById("dobError").textContent =
      "Date of Birth is required";
    isValid = false;
  }

  if (addressInput.value.trim() === "") {
    document.getElementById("addressError").textContent = "Please input address";
    isValid = false;
  }

  if (isValid) {
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      mobile: mobileInput.value.trim(),
      gender: document.querySelector('input[name="gender"]:checked').value,
      dob: dobInput.value.trim(),
      address: addressInput.value.trim(),
    };
    console.log(JSON.stringify(formData));

    alert("Form submitted successfully!");
    form.reset();
  }
});
