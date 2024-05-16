export default class Voiture {
#id;
#isDeleted;
#transmition;
#prix;
#moteur;
#nom;

constructor(props) {
    const {id, isDeleted, transmition, prix, moteur,nom} = props;
    this.id = id || "";
    this.isDeleted = isDeleted || false;
    this.transmition = transmition;
    this.prix = prix || 0;
    this.moteur = moteur;
    this.nom = nom;
};

get id() {return this.#id}
set id(value) {this.#id = value}

get isDelete() {return this.#isDeleted}
set isDelete(value) {this.#isDeleted = value}

get transmition() {return this.#transmition}
set transmition(value) {this.#transmition = value}

get prix() {return this.#prix}
set prix(value) {this.#prix = value}

get moteur() {return this.#moteur}
set moteur(value) {this.#moteur = value}

get nom() {return this.#nom}
set nom(value) {this.#nom = value}

toJSON(){
    const jsonObj = {
        id: this.id,
        isDeletedth: this.isDeleted,
        transmition: this.transmition,
        prix: this.prix,
        moteur: this.moteur,
        nom: this.nom
    }
    return jsonObj;
}
}
