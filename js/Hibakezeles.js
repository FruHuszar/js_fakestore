export default class Hibakezeles {
  constructor(szuloElemSzelektor) {
    this.szuloElem = document.querySelector(szuloElemSzelektor);
  }

  megjelenit(uzenet) {
    if (this.szuloElem) {
      this.szuloElem.innerText = uzenet;
      this.szuloElem.style.display = "block";
    }
  }

  elrejt() {
    if (this.szuloElem) {
      this.szuloElem.style.display = "none";
      this.szuloElem.innerText = "";
    }
  }
}
