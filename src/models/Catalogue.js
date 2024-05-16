export default class Catalogue{
    #id;
    #isDeleted;
    #nom;
    
    constructor(props) {
        const {id, isDeleted, nom} = props;
        this.id = id || "";
        this.isDeleted = isDeleted || false;
        this.nom = nom;
    };
    
    get id() {return this.#id}
    set id(value) {this.#id = value }
    
    get isDeleted() {return this.#isDeleted}
    set isDeleted(value) {this.#isDeleted = value }
    
    get nom() {return this.#nom}
    set nom(value) {this.#nom = value }

    toJSON(){
        const jsonObj = {
            id: this.id,
            isDeletedth: this.isDeleted,
            nom: this.nom 
        }
        return jsonObj;
    }
    }
    