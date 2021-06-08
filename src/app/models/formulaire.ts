
export class formulaire {
    id: number
}

export class Question {
    id: string;
    name: string;
    type: string; // textarea // number // checkbox / radio
    constructor(name, type) {
        this.id = makeId(5),
            this.name = name
        this.type = type
    }
}

const makeId = (length) => {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
}