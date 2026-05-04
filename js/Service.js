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
    fetch(VEGPONT)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        callback(data)
      })
      .catch((error) => console.log(error));
  }
}