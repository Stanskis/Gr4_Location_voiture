import App from "./src/App.js";
import Voiture from "./src/screens/voiture.js";
import Catalogue from "./src/screens/Catalogue.js";
import VoitureService from "./src/services/VoitureService.js";
import CatalogueService from "./src/services/CatalogueService.js";
const app = new App();

// app.render();
//const voiture1 = new Voiture(1,manuelle,57,essence);
//const voiture2 = new Voiture(2,automatique,82,hybride);
//const voiture3 = new Voiture(3,manuelle,136,electrique);

const catalogueService = new CatalogueService();
catalogueService.create({id:"car1"});

const voitureService = new VoitureService();
voitureService.create({id:"car1"});

const bp = true;