import Felhasznalo from "./Felhasznalo.js";

export default class Felhasznalok{
    #list = [];
    constructor(list, szuloElem){
        this.#list = list;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Email</th>
                    <th>Cím</th>
                </tr>
            </thead>
            <tbody class="tablazat-torzs"></tbody>
        </table>
        `;

        const tbodyElem = this.szuloElem.querySelector(".tablazat-torzs");

        this.#list.forEach((user) => {
            new Felhasznalo(user, tbodyElem);
        });
    }

}