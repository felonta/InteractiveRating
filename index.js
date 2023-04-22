const mainContainer = document.querySelector(".main_container");
const thanksContainer = document.querySelector(".thank_you");
const submitButton = document.getElementById("submit");
const backButton = document.getElementById("back");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", function () {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

backButton.addEventListener("click", function () {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    rating.innerHTML = rate.innerHTML;
  });
});
