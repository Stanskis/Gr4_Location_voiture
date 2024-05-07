export default class FooterComponent extends HTMLElement{

    constructor(){
        super();
        //const linkCss = '<link rel="stylesheet" href="src/assets/styles/header.css">';
        //const linkScript = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        //<script type="module" src="/src/assets/scripts/index.js"></script>`;

        this.innerHTML = this.render();
    }


    render(){

        //document.head.appendChild(linkCss);
        //document.body.appendChild(linkScript);

        return ``;
    }
}
customElements.define("footer-component", FooterComponent);