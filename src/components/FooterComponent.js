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

        return `<footer>
        <div id="footer" class="container-fluid">
          <div class="row">
            <div class="col-5 text-center">
                Suivez-nous
                <br>
                <a href="#"><img class="logos-socials" src="./src/images/facebook.png" alt="logo-facebook"></a>
                <a href="#"><img class="logos-socials" src="./src/images/twitter.png" alt="logo-twitter"></a>
                <a href="#"><img class="logos-socials" src="./src//images/youtube.png" alt="logo-youtube"></a>
                <a href="#"><img class="logos-socials" src="./src/images/instagram.png" alt="logo-instagram"></a>
                <a href="#"><img class="logos-socials" src="./src/images/linkedin.png" alt="logo-linkedin"></a>
            </div>
            <div id="link-footer" class="col-2 gx-5">
                <a href="#">À propos</a>
                <br><br>
                <a href="#">Contactez-nous</a>
                <br><br>
                <a href="#">Mentions légales</a>
                <br><br>
                <a href="#">Politique relative aux cookies</a>
                <br><br>
                <a href="#">Politique de confidentialité</a>
                <br><br>
            </div>
            <div class="col-5 text-center">
              <div class="justify-content-center">
                City Car Rentals Apps.
              </div>
              <div class="row justify-content-center">
                <div class="col-4">
                  <a href="#"><img id="logo-footer" src="src/images/rental-car-business-logo-sun-600nw-2209293149.webp" alt="logo"></a>
                </div>
                <div class="col-4">
                  <div class="row">
                    <a href="#"><img class="logo-store" src="./src/images/appStore.webp" alt=""></a>
                  </div>
                  <div class="row">
                    <a href="#"><img class="logo-store" src="./src/images/googlePlay.webp" alt=""></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div id="copyright" class="row justify-content-center">
            Copyright 2024, City Car Rentals ©
          </div>
        </div>
      </footer>`;
    }
}
customElements.define("footer-component", FooterComponent);