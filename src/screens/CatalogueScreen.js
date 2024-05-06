export default class CatalogueScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
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