export class Product {
    id: number;
    titre: String;
    categorieDeSondage: string;
    description:string;
    dateDeCreation:string;
    dateDeFermuture:string;
    dateDeModification:string;
    images: Array<String>;
    active:boolean;
    suspendu:boolean;
    nbParticipant:number;
    frais?:number=0.0;
    enabled?
    
}