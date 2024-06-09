import Account from "../models/Account.js";

export default class AccountService {
    data = [];

    constructor(){
        if(localStorage.getItem('accounts')){
            this.data = JSON.parse(localStorage.getItem('accounts')).map(jsonObj => {
                return new Account(jsonObj);
            });
        }
    }

    validate(entries){

        //si email pas ok
        return {"email": "L'adresse mail n'est pas valide"}

        return true;
    }

    create(entries){
        const account = new Account(entries);
        this.data.push(account);
        localStorage.setItem('accounts', JSON.stringify(this.data));
    }

    read(filter){
        return JSON.parse(localStorage.getItem('accounts')).filter(filter);
    }

    update(){

    }

    delete(){

    }
}