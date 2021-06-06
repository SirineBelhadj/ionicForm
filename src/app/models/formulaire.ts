
export class formulaire {
    id: number
}

export class Question {
    name: string;
    type: string; // textarea // number // checkbox / radio
    image: string = "";
    options?: any = [];
    constructor(name, type, image?, options?) {
        this.name = name
        this.type = type
        this.image = image
        this.options = options
    }
}