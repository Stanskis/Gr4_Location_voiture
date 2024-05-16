// import CatalogueChecks from "../models/CatalogueChecks.js";

// export default class CatalogueService{
//     data = [];

//     constructor(){
//         if (localStorage.getItem('CatalogueChecks')){
//             data = JSON.parse(localStorage.getItem('CatalogueChecks')).map(json => new CatalogueChecks(json));
//         }
//     }

//     // create(instance){

//     // }
// }

// import Contact from "../models/Contact.js";

// export default class ContactService {

//     data = [];

//     constructor(){
//         if(localStorage.getItem('contactList')){
//             this.data = JSON.parse(localStorage.getItem('contactList')).map(jsonObj => {
//                 return new Contact(jsonObj);
//             });
//         }
//     }

//     validate(entries){

//         //si email pas ok
//         return {"email": "L'adresse mail n'est pas valide"}

//         return true;
//     }

//     create(entries){
//         const contact = new Contact(entries);
//         this.data.push(contact);
//         localStorage.setItem('contactList', JSON.stringify(this.data));
//     }

//     read(filter){
//         return JSON.parse(localStorage.getItem('contactList')).filter(filter);
//     }

//     update(){

//     }

//     delete(){

//     }

// }

// export default class Contact {

//     id;
//     name;
//     email;
//     subject;
//     textArea;
//     isRead;

//     static nextId = 0;

//     constructor(props) {
//         this.id = props.id || ++(Contact.nextId);
//         this.name = props.name;
//         this.email = props.email;
//         this.subject = props.subject;
//         this.textArea = props.textArea;
//     }
// }