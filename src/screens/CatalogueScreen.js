import CatalogueService from "./src/services/CatalogueService.js";

export default class CatalogueScreen extends HTMLElement{

    #catalogueService;
    constructor(props){
        super(props);

        this.innerHTML = this.render();

        this.#catalogueService = new CatalogueService();
        const catalogues = this.#catalogueService.read();
    }

    render(){
        return `
            <div class="catalogue">
                <h1>Catalogue</h1>
            </div>
        `
    }
}

customElements.define("catalogue-screen", CatalogueScreen);