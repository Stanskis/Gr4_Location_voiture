import Catalogue from "./src/screens/Catalogue.js";

export default class CatalogueService {

    data = [];

    constructor() {
        if (localStorage.getItem('catalogues')) {
            thisdata = JSON.parse(localStorage.getItem('catalogues')).map(jsonObj => {
                return new Catalogue(jsonObj);});
        }
    }

    create(entries){
        const newVoiture = new Catalogue(entries);
        this.data.push(newVoiture);
        localStorage.setItem('catalogues',)
    }

    read(filter){
        return filter ? this.data.filter(filter) : this.data;
    }
}