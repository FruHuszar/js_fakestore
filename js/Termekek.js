import Termek from "./Termek.js"

export default class Termekek{
    #list = []
    constructor(list, szuloELem){
        this.#list = list
        this.szuloELem = szuloELem
        this.megjelenit()
    }
    
    megjelenit(){
        this.#list.forEach((termekElem) => {
            new Termek(termekElem, this.szuloELem);
        })
    }
}