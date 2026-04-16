const palya = document.getElementById("palya");
const pontszamKiiras = document.getElementById("pont");
const meret = 20;


let kigyo = [42, 41, 40];
let irany = 1;
let alma = 100;
let pont = 0;
let nehezseg = 300;


for (let i = 0; i < meret * meret; i++) {
  let cella = document.createElement("div");
  cella.classList.add("cella");
  palya.appendChild(cella);
}

const cellak = document.querySelectorAll(".cella");

function kirajzol() {
  for (let i = 0; i < cellak.length; i++) {
    cellak[i].classList.remove("kigyo");
    cellak[i].classList.remove("alma");
  }

  for (let i = 0; i < kigyo.length; i++) {
    cellak[kigyo[i]].classList.add("kigyo");
  }

  cellak[alma].classList.add("alma");
}

function mozgas() {
  let fej = kigyo[0];

  if (
    (irany === -1 && fej % meret === 0) ||
    (irany === 1 && fej % meret === meret - 1) ||
    (irany === -meret && fej < meret) ||
    (irany === meret && fej >= meret * (meret - 1))
  ) {
    jatekVege();
    return;
  }

  let ujFej = fej + irany;

  for (let i = 0; i < kigyo.length; i++) {
    if (kigyo[i] === ujFej) {
      jatekVege();
      return;
    }
  }

  kigyo.unshift(ujFej);

  if (ujFej === alma) {
    pont++;
    pontszamKiiras.textContent = "Pont: " + pont;
    alma = Math.floor(Math.random() * meret * meret);
  } else {
    kigyo.pop();
  }
  
}
console.log(alma)

function jatekVege() {
  window.alert("Vesztettél! \n" +
    "Elért pontok: " + pont);

  kigyo = [42, 41, 40];
  irany = 1;
  alma = 100;
  pont = 0;
  nehezseg = 300;

  pontszamKiiras.textContent = "Pont: 0";
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") irany = -meret;
  if (e.key === "ArrowDown") irany = meret;
  if (e.key === "ArrowLeft") irany = -1;
  if (e.key === "ArrowRight") irany = 1;
});

let idozito;
function Easy(){
  nehezseg = 300;
  frissites();
}
function Normal(){
  nehezseg = 200;
  frissites();
}
function Hard(){
  nehezseg = 100;
  frissites();
}

function frissites(){
  clearInterval(idozito);
  idozito = setInterval(function() {
    mozgas();
    kirajzol();
  },nehezseg);
}
kirajzol();