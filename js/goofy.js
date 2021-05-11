const howaboutno = document.querySelector("[data-how-about]");
const notwork = document.querySelector("[data-work]");
const modal = document.querySelector("[data-modal]");
const close = document.querySelector(".close");
const aintgonwork = document.querySelector("[data-not-gonna-work]");

howaboutno.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal-active");
});

notwork.addEventListener("click", (e) => {
  e.preventDefault();
  aintgonwork.classList.add("modal-active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modal-active");
  } else if (e.target === aintgonwork) {
    aintgonwork.classList.remove("modal-active");
  }
});
