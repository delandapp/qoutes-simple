const buttonNext = document.querySelector(".next");
const qoutes = document.querySelector(".qoutes");
const boxUser = document.querySelector(".box-user");

const arrayQoutes = [
  {
    person: "Geusan",
    status: "Mahasiswa",
    text: "Belajar terus jangan pernah menyerah karena kamu adalah siswa pelajar",
  },
  {
    person: "Anisa",
    status: "Mahasiswa",
    text: "Kamu harapan orang tua",
  },
  {
    person: "Deland",
    status: "Mahasiswa",
    text: "Nikmati nafsu sesaat",
  },
  {
    person: "Yogha",
    status: "Pelajar",
    text: "Aku gay",
  },
];

let max = arrayQoutes.length;
buttonNext.addEventListener("click", () => {
  let index = Math.floor(Math.random() * max);
  while (arrayQoutes[index].person == boxUser.children[1].textContent) {
    index = Math.floor(Math.random() * max);
  }
  boxUser.children[0].setAttribute("src", `${arrayQoutes[index].person}.jpg`);
  boxUser.children[1].textContent = arrayQoutes[index].person;
  boxUser.children[2].textContent = arrayQoutes[index].status;
  qoutes.children[2].textContent = arrayQoutes[index].text
  qoutes.children[1].textContent = `Qoutes By ${arrayQoutes[index].person}`
});
    qoutes.children[4].addEventListener('click', () => {qoutes.children[4].preventDefault; console.info('1');});