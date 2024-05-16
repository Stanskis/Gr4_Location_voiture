export default class Account{
    #id;
    #nom;
    #prenom;
    #email;
    #mdp;
    counter = 0;

    constructor(props){
        const{id, nom, prenom, email, mdp} = props;
        this.#id = id || ++(Account.nextId);
        this.#nom = nom;
        this.#prenom = prenom;
        this.#email = email;
        this.#mdp = mdp;
    }

    nextId(){
        let counter = 0;
        return counter;
    }

    get id(){
        return this.#id;
    }

    get nom(){
        return this.#nom;
    }

    get prenom(){
        return this.#prenom;
    }

    get email(){
        return this.#email;
    }

    get mdp(){
        return this.#mdp;
    }

    set nom(value){
        if(value.length >= 2) return;
        this.#nom = value;
    }

    set prenom(value){
        if(value.length >= 2) return;
        this.#prenom = value;
    }

    set email(value){

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(value.match(emailRegex) != null) return;
        this.#email = value;
    }

    set mdp(value){

        let regexMaj = new RegExp("[A-Z]");
        let regexMin = new RegExp("[a-z]");
        let regexChiffre = new RegExp("[0-9]");
        let regexSpecial = new RegExp("\\W");
        let compteurMdp = 0;

        if(regexMaj.test(value)) compteur++;
        if(regexMin.test(value)) compteur++;
        if(regexChiffre.test(value)) compteur++;
        if(regexSpecial.test(value)) compteur++;
        if(value.length < 8) compteur--;

        if(compteurMdp == 4) return;
        this.#mdp = value;
    }

    
}