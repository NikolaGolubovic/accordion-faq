const buttons = document.querySelectorAll(".accordion-item button");
const accordions = document.querySelectorAll(".accordion-item");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (this.parentElement.parentElement.classList.contains("active")) {
      this.parentElement.parentElement.classList.remove("active");
      return;
    }
    this.parentElement.parentElement.classList.add("active");
  });
});
