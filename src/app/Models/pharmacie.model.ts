export class User {
    username: string ;
    password: string;
}


export class Pharmacie extends User {
    id: number ;
    email: string ;
    heure_ouv: any;
    heure_ferm: any ;
    adresse: string ;
    medicament: any ;
    role: any ;
}
