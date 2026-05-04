export default class Termek{
    #obj = {}
    constructor(obj= {id, title,price, description, category, image, rating}, szuloElem){
        this.#obj = obj
        this.szuloElem = szuloElem
        this.megjelenit()
        this.szinez()
    }
    
    megjelenit(){
        let kod =`
        <div class="card">
            <img src="${this.#obj.image}" alt="${this.#obj.title}">
            <h2>${this.#obj.title}</h2>
            <p class="kategoria">${this.#obj.category}</p>
            <p class="ar">${this.#obj.price}$</p>
            <p class="leiras">${this.#obj.description}</p>
            <p class="ertekeles"><span>${this.#obj.rating.rate}★ /${this.#obj.rating.count}</span></p> 
        </div>
        `

        this.szuloElem.insertAdjacentHTML("beforeend", kod)
    }
    
    szinez() {
        const kartyaElem = this.szuloElem.querySelector(".card:last-child img");
        const szinek = ["#E3F2FD", "#EEF6FB", "#F1F5F9", "#EDEDED", "#E6E8EA", "#E4DCD6"];
        const randomIndex = Math.floor(Math.random() * szinek.length);
        kartyaElem.style.backgroundColor = szinek[randomIndex];
    }
}