export default class Voiture {
id;
transmition;
prix;
moteur;

constructor(obj) {
    const {id, transmition, prix, moteur} = obj;
    this.id = id;
    this.transmition = transmition;
    this.prix = prix;
    this.moteur = moteur;
};

getId() {
    return this.id;
}

getTransmition() {
    return this.transmition;
}

getPrix() {
    return this.prix;
}

getMoteur() {
    return this.moteur;
}

}
