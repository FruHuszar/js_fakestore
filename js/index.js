import Service from "./Service.js";
import termekek from "./Termekek.js";
import Felhasznalok from "./Felhasznalok.js";
import Hibakezeles from "./Hibakezeles.js";

const SZULOELEM = document.querySelector(".tartalom");
const SZULOELEMUSER = document.querySelector(".user-tartalom");
const VEGPONT = "https://fakestoreapi.com/products";
const VEGPONTUSERS = "https://fakestoreapi.com/users";

const termekekGomb = document.querySelector("#termekek");
const felhasznaloGomb = document.querySelector("#felhasznalok");

const service = new Service();
const hibaKezelo = new Hibakezeles(".error-message");

termekekGomb.addEventListener("click", () => {
  service.getData(VEGPONT, termekAdatok, hibaKezelo);
});

felhasznaloGomb.addEventListener("click", () => {
  service.getData(VEGPONTUSERS, felhasznaloAdatok, hibaKezelo);
});

function termekAdatok(data) {
  new termekek(data, SZULOELEM);
  SZULOELEMUSER.innerHTML = "";
}

function felhasznaloAdatok(data) {
  new Felhasznalok(data, SZULOELEMUSER);
  SZULOELEM.innerHTML = "";
}
