const modal = document.querySelectorAll(".modal");
const children = document.querySelectorAll(".children");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const answer = document.querySelectorAll("text");
children.forEach((element) => {
  console.log(element.parentElement.parentElement);
  element.addEventListener("click", () => {
    element.parentElement.parentElement.classList.toggle("show");

    console.log(element.parentElement.parentElement);
  });
});
