export default class Felhasznalo{
    #obj={};
    constructor(obj, szuloElem){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit() {
        let kod = `
        <tr>
            <td class="capitalize">${this.#obj.name.firstname} ${this.#obj.name.lastname}</td>
            <td>${this.#obj.email}</td>
            <td><span class="bold">${this.#obj.address.zipcode} ${this.#obj.address.city}</span>, ${this.#obj.address.street} ${this.#obj.address.number || ""}</td>
        </tr>
        `;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}