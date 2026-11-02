// Dark mode: only add / remove the class. Colours live in the CSS.
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Back to top
const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", function () {
  topBtn.classList.toggle("show", window.scrollY > 300);
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form: reject an empty email
const form = document.getElementById("message-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (emailInput.value.trim() === "") {
    emailInput.classList.add("invalid");
    formMsg.textContent = "Please enter your email.";
    formMsg.className = "form-msg error";
    return;
  }

  if (!emailInput.checkValidity()) {
    emailInput.classList.add("invalid");
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.className = "form-msg error";
    return;
  }

  emailInput.classList.remove("invalid");
  const who = nameInput.value.trim() || "friend";
  formMsg.textContent = "Hello " + who + ", thanks for your details!";
  formMsg.className = "form-msg success";
  form.reset();
});
