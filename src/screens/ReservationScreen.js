export default class ReservationScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return`
        <main>
        <div class="container bg-light rounded-2 d-flex flex-column overhidden p-2">
            <div class="row-cols-12 m-4">
                <h2 class="text-center">Réservation</h2>
                <div class="select-list">
                    <strong>Assurance de base</strong>
                    <span>Franchise à 1000€</span>
                </div>
                <div method="post">
                    <img class="" src="#" alt="catalogue_img_selected">
                  <form>
                    <fieldset>
                      <legend>---Voiture choisie----</legend>
                        <div class="mb-3">
                        <label class="form-label">Ville :</label>
                        <select class="form-select">
                          <option></option>
                          <option>Lille</option>
                          <option>Roubaix</option>
                          <option>Camabaix</option>
                          <option>Marseille</option>
                        </select>
                      </div>
                        <div class="mb-3">
                        <label class="form-label">Adresse :</label>
                        <input class="form-control me-2" type="search" placeholder="Lieu de prise en charge" aria-label="Search">
                      </div>

                        <div class="d-flex justify-content-evenly gap-5 mb-3">
                            <div>
                                <label class="form-label" for="startDate">Date de prise en charge :</label>
                                <input id="startDate" class="form-control" type="date" />
                                <span id="startDateSelected"></span>
                            </div>
                            <div>
                                <label class="form-label">Heure de prise en charge :</label>
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
                            </div>
                            <div>
                                <label class="form-label" for="startDate">Date de restitution :</label>
                                <input id="startDate" class="form-control" type="date" />
                                <span id="startDateSelected"></span>
                            </div>
                            <div>
                                <label class="form-label">Heure de restitution :</label>
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
                            </div>
                        </div>
                        <div class="mb-3">
                        <label class="form-label">Boite :</label>
                        <select class="form-select">
                          <option></option>
                          <option>Automatique</option>
                          <option>Manuelle</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Carburant :</label>
                        <select class="form-select">
                          <option></option>
                          <option>Essence</option>
                          <option>Diesel</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Places :</label>
                        <select class="form-select">
                          <option></option>
                          <option>2</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label class="control-label " for="checkbox">
                          Prix par jour :
                        </label>
                        <div class="">
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
                      
                      <div class="mb-3">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox">
                          <label class="form-check-label">
                            Conditions accepted
                          </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">Reserver</button>
                    </fieldset>
                  </form>
            </div>
        </div>
    </main>
        `
    }
}
customElements.define("reservation-screen", ReservationScreen);