export default class LoginScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return ``
    }
}

customElements.define("login-screen", LoginScreen);