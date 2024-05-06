import App from "./App.js";
import HomeScreen from "./screens/HomeScreen.js";
import CatalogueScreen from "./screens/CatalogueScreen.js";

export default class Router{

    constructor(){
        
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
        window.onclick = this.handleDataLinks;

    }

    handleDataLinks = (e) =>{
        const link = e.target.closest("[data-link]");
        if(link){
            e.preventDefault();
            console.log(link.href);
            history.pushState("", "", link.href);
            this.navigate();
        }
    }

    navigate = (e) => {
        console.log(e?.type);
        const app = new App();

        let page = "";
        if(location.pathname == "/" || location.pathname == "/home"){
            document.title = "Location Voiture - Accueil";
            page = new HomeScreen();
        }
        else if(location.pathname == "/catalogue"){
            document.title = "Location Voiture - Catalogue";
            page = new CatalogueScreen();
        }
        else if(location.pathname == "/reservation"){
            document.title = "Location Voiture - Reservation";
            page = `<h1>Reservation</h1>`;
        }
        else if(location.pathname == "/login"){
            document.title = "Location Voiture - Login";
            page = `<h1>Login</h1>`;
        }
        else {
            page = `<h1>Page 404</h1>`;
        }

        app.render(page);
    }
}