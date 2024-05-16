import AccountService from "../services/AccountService.js";

export default class CreateAccountScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
        this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
    }

    handleLoginFormSubmit = (e) => {
        e.preventDefault();
        const entries = Object.fromEntries(new FormData(e.target));
        let isValid = true;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let regexMaj = new RegExp("[A-Z]");
        let regexMin = new RegExp("[a-z]");
        let regexChiffre = new RegExp("[0-9]");
        let regexSpecial = new RegExp("\\W");
        let compteur = 0;

        e.target.querySelector("#nom-error").textContent = "";
        e.target.querySelector("#prenom-error").textContent = "";
        e.target.querySelector("#email-error").textContent = "";
        e.target.querySelector("#mdp-error").textContent = "";
        e.target.querySelector("#cmdp-error").textContent = "";
        

        if(entries.nom.length < 2){
            isValid = false;
            e.target.querySelector("#nom-error").textContent = "Le nom doit comporter au moins 2 caractères.";
        }

        if(entries.prenom.length < 2){
            isValid = false;
            e.target.querySelector("#prenom-error").textContent = "Le prénom doit comporter au moins 2 caractères.";
        }

        if(entries.email.match(emailRegex) == null){
            isValid = false;
            e.target.querySelector("#email-error").textContent = "L'adresse email n'est pas conforme.";
        }

        if(regexMaj.test(entries.mdp)) compteur++;
        if(regexMin.test(entries.mdp)) compteur++;
        if(regexChiffre.test(entries.mdp)) compteur++;
        if(regexSpecial.test(entries.mdp)) compteur++;
        if(entries.mdp.length < 8) compteur--;

        switch(true){
            case compteur == 3:
                e.target.querySelector("#mdp-error").textContent = 'Mot de passe moyen (Merci de saisir au moins une majuscule, une minuscule, un chiffre, un caractère spécial et le mot de passe doit avoir une longueur de 8 caractères).';
                isValid = false;
                break;
            case compteur == 2:
                e.target.querySelector("#mdp-error").textContent = 'Mot de passe faible (Merci de saisir au moins une majuscule, une minuscule, un chiffre, un caractère spécial et le mot de passe doit avoir une longueur de 8 caractères).';
                isValid = false;
                break;
            case compteur == 1:
                e.target.querySelector("#mdp-error").textContent = 'Mot de passe dangereux! (Merci de saisir au moins une majuscule, une minuscule, un chiffre, un caractère spécial et le mot de passe doit avoir une longueur de 8 caractères)';
                isValid = false;
                break;
            case compteur <= 0:
                e.target.querySelector("#mdp-error").textContent = 'Mot de passe dangereux! (Merci de saisir au moins une majuscule, une minuscule, un chiffre, un caractère spécial et le mot de passe doit avoir une longueur de 8 caractères)';
                isValid = false;
                break;
        }

        if(entries.mdp != entries.cmdp){
            isValid = false;
            e.target.querySelector("#cmdp-error").textContent = "La confirmation du mot de passe n'est pas identique à celui-ci.";
        }

        if(isValid){
            const service = new AccountService();
            service.create(entries);
        }


    }
    

    render(){
        return `
            <div class="text-center pt-5">
            <h2>Création de compte</h2>
            <hr/>
            </div>
            <div class="d-flex align-items-center justify-content-center py-3">
            <div class="justify-content-center align-items-center">
            <form id="create-account-form" class="d-flex-column justify-content-center align-items-center" autocomplete>
            <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input type="text" class="form-control" name="nom" id="nom">
                </div>
                <div id="nom-error" class="text-danger mb-3"></div>
                <div class="mb-3">
                    <label for="prenom" class="form-label">Prénom</label>
                    <input type="text" class="form-control" name="prenom" id="prenom">
                </div>
                <div id="prenom-error" class="text-danger mb-3"></div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp">
                </div>
                <div id="email-error" class="text-danger mb-3"></div>
                <div class="mb-3">
                    <label for="mdp" class="form-label">Mot de passe</label>
                    <input type="password" class="form-control" name="mdp" id="mdp">
                </div>
                <div id="mdp-error" class="text-danger mb-3"></div>
                <div class="mb-3 pb-3">
                    <label for="cmdp" class="form-label">Confirmer le mot de passe</label>
                    <input type="password" class="form-control" name="cmdp" id="cmdp">
                </div>
                <div id="cmdp-error" class="text-danger mb-3"></div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Créer un compte</button>
                </div>
            </form>
        </div>
        </div>`
    }
}

customElements.define("create-account-screen", CreateAccountScreen);