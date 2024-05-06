import Router from "./Router.js";

export default class App{

    constructor(){
        const router = new Router();
        // this.render();
    }


    render(screen){
        document.getElementById('app').firstElementChild?.remove();
        document.getElementById('app').append(screen);
    }
    
}