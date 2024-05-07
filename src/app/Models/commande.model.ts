import { Medicament } from "./medicament.model";
import { Patient } from "./patient.model";

export class Commande {
    patient : Patient;
    cammande_reserved_medic : Medicament;
    cnam : any;
    description : string;
    confirmadresse : string;
    ordonnance : any;
    pharmacielocation : string;
}
