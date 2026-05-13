export default class Service {
  constructor() {}

  /*
   *
   * !! Definíció
   *
   * Callback függvény
   * Egy aszinkron folyamatnak paraméterként átadott függvény,
   * amely nem fut le azonnal,
   * hanem megvárja az adatok beérkezését,
   * és csak a válasz megérkezése után hajtódik végre.
   *
   */

  getData(VEGPONT, callback) {
    const errorDiv = document.querySelector(".error-message");

    fetch(VEGPONT)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hiba történt a termékek lekérése során.");
        }
        return response.json();
      })
      .then((data) => {
        if (errorDiv) errorDiv.style.display = "none";
        callback(data);
      })
      .catch((error) => {
        console.error("Fetch hiba:", error);
        if (errorDiv) {
          errorDiv.innerText = "Hiba történt a termékek lekérése során.";
          errorDiv.style.display = "block";
        }
      });
  }
}
