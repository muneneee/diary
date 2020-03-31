export class Thought {
    showDescription: boolean;
    constructor(public id: number,public title: string,public description: string, public entryDate: Date){
        this.showDescription=false;
    }
}
