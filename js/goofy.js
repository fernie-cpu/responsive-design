const modal = document.querySelector("[data-modal]");
const howaboutno = document.querySelector("[data-how-about]");
const notwork = document.querySelector("[data-work]");

const howabout = () => {
  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  const img = document.createElement("img");
  const modalText = document.createElement("div");
  const para = document.createElement("span");

  img.src =
    "https://media1.tenor.com/images/43271101e4c50b054bd072ca52a81b65/tenor.gif?itemid=19053606";
  img.alt = "how about no";

  para.textContent = "This ain't the real deal son";

  modal.classList.add("modal");
  modal.classList.add("modal-active");
  modalContent.classList.add("modal-content");
  modalText.classList.add("modal-text");
  para.classList.add("para-modal");

  modal.appendChild(modalContent);
  modalContent.appendChild(img);
  modalContent.appendChild(modalText);
  modalText.appendChild(para);

  document.body.appendChild(modal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("modal-active");
    }
  });
};

const aintgonwork = () => {
  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  const img = document.createElement("img");
  const modalText = document.createElement("div");
  const para = document.createElement("span");
  const para1 = document.createElement("span");

  img.src =
    "https://media1.tenor.com/images/2ca1bdf42765d3cdb3de15c6da8c2245/tenor.gif";
  img.alt = "ain't gonna work either";

  para.textContent = "Nothing to see here either";
  para1.textContent = "I told ya. This ain't the real thing";

  modal.classList.add("modal");
  modal.classList.add("modal-active");
  modalContent.classList.add("modal-content");
  modalText.classList.add("modal-text");
  para.classList.add("para-modal");
  para1.classList.add("para-modal");

  modal.appendChild(modalContent);
  modalContent.appendChild(img);
  modalContent.appendChild(modalText);
  modalText.appendChild(para);
  modalText.appendChild(para1);

  document.body.appendChild(modal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("modal-active");
    }
  });
};

howaboutno.addEventListener("click", (e) => {
  e.preventDefault();
  howabout();
});

notwork.addEventListener("click", (e) => {
  e.preventDefault();
  aintgonwork();
});
