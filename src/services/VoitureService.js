import Catalogue from "./src/screens/Catalogue.js";

export default class VoitureService {

    data = [];

    constructor() {
        if (localStorage.getItem('voitures')) {
            thisdata = JSON.parse(localStorage.getItem('voitures')).map(jsonObj => {
                return new Catalogue(jsonObj);});
        }
    }

    create(entries){
        const newVoiture = new Voiture(entries);
        this.data.push(newVoiture);
        localStorage.setItem('voitures',)
    }

    read(filter){
        return filter ? this.data.filter(filter) : this.data;
    }
}