export default class CatalogueScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <body>
        <div class="container-sm">
          <div>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Lieu de prise en charge" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Rechercher</button>
            </form>
          </div>
          <div>
            <div class="bootstrap-iso">
              <div class="container-sm">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <form method="post">
                      <div class="form-group ">
                        <label class="control-label " for="date">
                          Date de prise en charge
                        </label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-calculator">
                            </i>
                          </div>
                          <input class="form-control" id="date" name="date" placeholder="JJ/MM/AAAA" type="text" />
                        </div>
                      </div>
                      <div class="form-group">
                        <div>
      
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <form class="form-floating">
              <select class="form-select" aria-label="Default select example">
                <option selected>0:00</option>
                <option value="2">0:30</option>
                <option value="3">1:00</option>
                <option value="4">1:30</option>
                <option value="5">2:00</option>
                <option value="6">2:30</option>
                <option value="7">3:00</option>
                <option value="8">3:30</option>
                <option value="9">4:00</option>
                <option value="10">4:30</option>
                <option value="11">5:00</option>
                <option value="12">5:30</option>
                <option value="13">6:00</option>
                <option value="14">6:30</option>
                <option value="15">7:00</option>
                <option value="16">7:30</option>
                <option value="17">8:00</option>
                <option value="18">8:30</option>
                <option value="19">9:00</option>
                <option value="20">9:30</option>
                <option value="21">10:00</option>
                <option value="22">10:30</option>
                <option value="23">11:00</option>
                <option value="24">11:30</option>
                <option value="25">12:00</option>
                <option value="26">12:30</option>
                <option value="27">13:00</option>
                <option value="28">13:30</option>
                <option value="29">14:00</option>
                <option value="30">14:30</option>
                <option value="31">15:00</option>
                <option value="32">15:30</option>
                <option value="33">16:00</option>
                <option value="34">16:30</option>
                <option value="35">17:00</option>
                <option value="36">17:30</option>
                <option value="37">18:00</option>
                <option value="38">18:30</option>
                <option value="39">19:00</option>
                <option value="40">19:30</option>
                <option value="41">20:00</option>
                <option value="42">20:30</option>
                <option value="43">21:00</option>
                <option value="44">21:30</option>
                <option value="45">22:00</option>
                <option value="46">22:30</option>
                <option value="47">23:00</option>
                <option value="48">23:30</option>
              </select>
              <label for="floatingInputValue">Heure</label>
            </form>
            <div class="bootstrap-iso">
              <div class="container-sm">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <form method="post">
                      <div class="form-group ">
                        <label class="control-label " for="date">
                          Date de restitution
                        </label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-calculator">
                            </i>
                          </div>
                          <input class="form-control" id="date" name="date" placeholder="JJ/MM/AAAA" type="text" />
                        </div>
                      </div>
                      <div class="form-group">
                        <div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <form class="form-floating">
              <select class="form-select" aria-label="Default select example">
                <option selected>0:00</option>
                <option value="2">0:30</option>
                <option value="3">1:00</option>
                <option value="4">1:30</option>
                <option value="5">2:00</option>
                <option value="6">2:30</option>
                <option value="7">3:00</option>
                <option value="8">3:30</option>
                <option value="9">4:00</option>
                <option value="10">4:30</option>
                <option value="11">5:00</option>
                <option value="12">5:30</option>
                <option value="13">6:00</option>
                <option value="14">6:30</option>
                <option value="15">7:00</option>
                <option value="16">7:30</option>
                <option value="17">8:00</option>
                <option value="18">8:30</option>
                <option value="19">9:00</option>
                <option value="20">9:30</option>
                <option value="21">10:00</option>
                <option value="22">10:30</option>
                <option value="23">11:00</option>
                <option value="24">11:30</option>
                <option value="25">12:00</option>
                <option value="26">12:30</option>
                <option value="27">13:00</option>
                <option value="28">13:30</option>
                <option value="29">14:00</option>
                <option value="30">14:30</option>
                <option value="31">15:00</option>
                <option value="32">15:30</option>
                <option value="33">16:00</option>
                <option value="34">16:30</option>
                <option value="35">17:00</option>
                <option value="36">17:30</option>
                <option value="37">18:00</option>
                <option value="38">18:30</option>
                <option value="39">19:00</option>
                <option value="40">19:30</option>
                <option value="41">20:00</option>
                <option value="42">20:30</option>
                <option value="43">21:00</option>
                <option value="44">21:30</option>
                <option value="45">22:00</option>
                <option value="46">22:30</option>
                <option value="47">23:00</option>
                <option value="48">23:30</option>
              </select>
              <label for="floatingInputValue">Heure</label>
            </form>
      
            <div class="bootstrap-iso">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <form method="post">
                      <div class="form-group" id="div_checkbox">
                        <label class="control-label " for="checkbox">
                          Type de v&eacute;hicule
                        </label>
                        <div class=" ">
                          <label class="checkbox-inline">
                            <input name="checkbox" type="checkbox" value="Petite voiture" />
                            Petite voiture
                          </label>
                          <label class="checkbox-inline">
                            <input name="checkbox" type="checkbox" value="Voiture moyenne" />
                            Voiture moyenne
                          </label>
                          <label class="checkbox-inline">
                            <input name="checkbox" type="checkbox" value="Grande voiture" />
                            Grande voiture
                          </label>
                          <label class="checkbox-inline">
                            <input name="checkbox" type="checkbox" value="SUV" />
                            SUV
                          </label>
                          <label class="checkbox-inline">
                            <input name="checkbox" type="checkbox" value="Monoplace" />
                            Monoplace
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div class="bootstrap-iso">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <form method="post">
                    <div class="form-group" id="div_checkbox">
                      <label class="control-label " for="checkbox">
                        Prix par jours
                      </label>
                      <div class=" ">
                        <label class="checkbox-inline">
                          <input name="checkbox" type="checkbox" value="0 &euro; - 50 &euro;" />
                          0 &euro; - 50 &euro;
                        </label>
                        <label class="checkbox-inline">
                          <input name="checkbox" type="checkbox" value="50 &euro; - 100 &euro;" />
                          50 &euro; - 100 &euro;
                        </label>
                        <label class="checkbox-inline">
                          <input name="checkbox" type="checkbox" value="100 &euro; - 150 &euro;" />
                          100 &euro; - 150 &euro;
                        </label>
                        <label class="checkbox-inline">
                          <input name="checkbox" type="checkbox" value="150 &euro; - 200 &euro;" />
                          150 &euro; - 200 &euro;
                        </label>
                        <label class="checkbox-inline">
                          <input name="checkbox" type="checkbox" value="200 &euro; et +" />
                          200 &euro; et +
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bootstrap-iso">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <form method="post">
                  <div class="form-group" id="div_checkbox">
                    <label class="control-label " for="checkbox">
                      Transmition
                    </label>
                    <div class=" ">
                      <label class="checkbox-inline">
                        <input name="checkbox" type="checkbox" value="Manuelle" />
                        Manuelle
                      </label>
                      <label class="checkbox-inline">
                        <input name="checkbox" type="checkbox" value="Automatique" />
                        Automatique
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      
        <a href="#" class="list-group-item">
          <div class="d-flex w-100 justify-content-between">
            <img src="assets/img/10043803.webp" class="col-lg-2 col-6" alt="voiture essence" />
            <small>voiture 1</small>
          </div>
          <div class="d-flex w-100 justify-content-between">
          <p>5 Places Essence</p> 
          <p>Lille</p>
          </div>
          <div class="d-flex w-100 justify-content-between">
            <p>Manuelle</p>
            <p>prix pour 1 jour: 57 €</p>
            </div>
            <div class="form-group">
              <div>
               <button class="btn btn-primary " name="submit" type="submit">
                Voir l'offre
               </button>
              </div>
             </div>
      </a>
      <br>
      <a href="#" class="list-group-item">
        <div class="d-flex w-100 justify-content-between">
          <img src="assets/img/toyota-prius-iv-phev-1128x484.jpg" class="col-lg-2 col-6" alt="voiture hybride" />
          <small>voiture 2</small>
        </div>
        <div class="d-flex w-100 justify-content-between">
        <p>4 Places hybride</p> 
        <p>Roubaix</p>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p>Automatique</p>
          <p>prix pour 1 jour: 82 €</p>
          </div>
          <div class="form-group">
            <div>
             <button class="btn btn-primary " name="submit" type="submit">
              Voir l'offre
             </button>
            </div>
           </div>
      </a> 
      <br>
      <a href="#" class="list-group-item">
        <div class="d-flex w-100 justify-content-between">
          <img src="assets/img/foxtron-model-e.jpg" class="col-lg-2 col-6" alt="voiture electrique" />
          <small>voiture 3</small>
        </div>
        <div class="d-flex w-100 justify-content-between">
        <p>4 Places Electrique</p> 
        <p>Cambaix</p>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p>Manuelle</p>
          <p>prix pour 1 jour: 136 €</p>
          </div>
          <div class="form-group">
            <div>
             <button class="btn btn-primary " name="submit" type="submit">
              Voir l'offre
             </button>
            </div>
           </div>
      </a> 
      </body>
        `
    }
}

customElements.define("catalogue-screen", CatalogueScreen);