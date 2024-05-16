export default class LoginScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();

        this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
    }

    handleLoginFormSubmit = (e) => {
        e.preventDefault();
        const entries = Object.fromEntries(new FormData(e.target));
        let isValid = false;
        let accounts = JSON.parse(localStorage.getItem("account"));
       
        accounts.forEach((item) => {
            if(item.email == entries.email && item.mdp == entries.mdp){
                isValid = true;
            }
        });

        if(isValid){
            console.log("connexion ok.");
        }


    }

    render(){
        return `<div id="login-div" class="d-flex align-items-center justify-content-center py-5">
            <div class="justify-content-center align-items-center">
            <form id="login-form" class="d-flex-column justify-content-center align-items-center" autocomplete>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="mdp" class="form-label">Mot de passe</label>
                    <input type="password" class="form-control" name="mdp" id="mdp">
                </div>
                <div class="pb-3 text-center"><a href="/create-account" data-link>Créer un compte</a></div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Connexion</button>
                </div>
            </form>
        </div>
        </div>`
    }
}

customElements.define("login-screen", LoginScreen);