export default class HeaderComponent extends HTMLElement{

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

        return `<header class="bg-primary">
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src="src/assets/images/rental-car-business-logo-sun-600nw-2209293149-removebg-preview.png" height="150px" alt="logo"></a>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="src/assets/images/rental-car-business-logo-sun-600nw-2209293149-removebg-preview.png" height="150px" alt="logo"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="HomeScreen.js" target="spa">Acceuil</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" target="spa">Catalogue</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" target="spa">Réservation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#" class="login-button">Connexion</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
    </header>`;
    }
}
customElements.define("header-component", HeaderComponent);