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

  getData(VEGPONT, callback, hibaObjektum) {
    if (hibaObjektum) {
      hibaObjektum.elrejt();
    }

    fetch(VEGPONT)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hiba történt a termékek lekérése során.");
        }
        return response.json();
      })
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.error("Fetch hiba:", error);
        if (hibaObjektum) {
          hibaObjektum.megjelenit("Hiba történt a termékek lekérése során.");
        }
      });
  }
}
