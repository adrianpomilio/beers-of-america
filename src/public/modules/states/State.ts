export class State {
    abbr: string;
    name: string;
    d: string;
    selected: boolean;

    constructor(abbr:string, name:string, d:string, selected:boolean = false){
        this.abbr = abbr;
        this.name = name;
        this.d = d;
        this.selected = selected;
    }

    selectState() {
        this.selected = true;
        return false;
    }

}
