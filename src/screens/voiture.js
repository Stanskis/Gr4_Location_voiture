export default class Voiture {
id;
transmition;
place;

constructor(obj) {
    const {id, transmition, place} = obj;
    this.id = id;
    this.transmition = transmition;
    this.place = place;
}
}
