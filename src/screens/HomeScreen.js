export default class HomeScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <style>@import "./src/styles/HomeScreen.css"</style>
        <main class="bg-light rounded-2 d-flex flex-column overhidden">
            <div class="container-fluid p-5 mt-3">
                <div class="row">
                    <div class="col-12">
                        <div class="items__body p-5 text-center text-white rounded-4 bg-primary py-3 d-flex justify-content-around">
                            <div class="items__image py-4">
                            <img src="./src/images/location-voiture-vacances.webp" alt="">
                            </div>
                            <div class="items__text p-4 d-flex flex-column justify-content-center align-items-center">
                                <div class="title"><h1>Location Voiture</h1></div>
                                    <div class="subtitle"><p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.
                                        </p>
                                    </div>
                                 <div class="perks d-flex my-4 text-info">
                               <div class="perk1 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                 <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                               </svg><p>Satisfaction Garantie</p></div>
                                <div class="perk2 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                 <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                 <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                </svg><p>Disponibilité 24h</p></div>
                              <div class="perk3 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                 <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                              </svg><p>Localisation France</p></div>
                              <div class="perk4 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                                 <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                              </svg><p>Rendez-Vous Flexible</p></div>
                              <div class="perk5 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                               <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                               </svg><p>Securité Fiable</p></div>
                             </div>
                              <button class="btn btn-secondary my-3" type="submit">Prendre un Rendez-vous!</button>
                            </div>
                            <div class="items__image py-4">
                                <img src="./src/images/img2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid justify-content-center">
                <div class="band__body my-3 p-4 text-center text-secondary">
                    <h2>Pourquoi choisir Notre Entreprise pour votre location de voiture ?</h2>
                    <h3>Découvrez les avantages uniques de la location de voiture avec Notre Entreprise !</h3>
                </div>
            </div>
            <div class="container-fluid px-5">
            <div class="row items__body text-center text-white rounded-4 bg-success mb-5 p-5">
            <div class="item1 p-3 col-6">
                <h4 class="p-2 m-3 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-square mb-1" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                </svg> Location voiture courte et moyenne durée pour vos voyages en France</h4> 
                <p>Flexibilité inégalée permettant de s'adapter à vos besoins de voyage à travers des villes comme Paris, Roubaix et Marseille.
                    Tarifs compétitifs offrant une alternative économique aux acteurs traditionnels de la location de voiture.
                    Assistance client premium garantissant une expérience sans souci durant toute la période de location.</p>
            </div>
            <div class="item2 p-3 col-6">
                <h4 class="p-2 m-3 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-square mb-1" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                </svg> Solutions fiables pour une location de voiture sans souci</h4>
                <p>Processus de réservation simplifié disponible via notre interface, facilitant l'accès à une voiture à Paris, Nantes, ou Bordeaux.
                  Entretien rigoureux des véhicules assurant votre sécurité et votre confort sur la route, qu'il s'agisse d'un SUV ou d'une berline.
                  Support client 24/7 pour répondre à toutes vos questions et vous accompagner en cas de besoin durant votre location en Corse ou ailleurs en France.</p>
             </div>
            <div class="item3 p-3 col-6">
                <h4 class="p-2 m-3 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-square mb-1" viewBox="0 0 16 16">
                 <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                 <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
             </svg> Sélection variée de voitures à louer chez Notre Entreprise</h4>
                <p>Large gamme de véhicules répondant à tous les besoins : des citadines compactes comme pour vos déplacements urbains, jusqu'aux voitures de luxe et SUV pour voyager en style et confort.
                    Options écologiques disponibles, y compris des modèles électriques ou hybride, pour réduire votre empreinte carbone tout en explorant des villes comme Nice ou Roubaix.</p>
            </div>
            <div class="item4 p-3 col-6">
                <h4 class="p-2 m-3 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-square mb-1" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                </svg> Louez des voitures plus écologiques et contribuez à un avenir durable</h4>
                <p>Engagez-vous dans la protection de l'environnement en choisissant parmi notre sélection de véhicules électriques et hybrides.
                    Profitez d'une conduite silencieuse et agréable, contribuant ainsi à un tourisme plus responsable.
                    Réduction des émissions polluantes grâce à notre flotte de voitures plus respectueuses de l'environnement, disponibles partout en France.</p>
            </div>
            </div>
        </div>
    </main>
        `
    }
}
customElements.define("home-screen", HomeScreen);