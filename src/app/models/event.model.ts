import { v4 as uuidv4 } from 'uuid';
export class EventModel {
    public id: string;
    public title: string;
    public description: string;
    public date: string;
    public image: string;
    public isPriority: boolean;
    public isHidden: boolean = false;
    public notes: string[] = [];

    constructor(title: string="", description: string="", date: string="", image: string="", isPriority: boolean=false, isHidden: boolean=false, notes: string[] = []) {
        this.id = uuidv4();
        this.title = title;
        this.date = date;
        this.description = description;
        this.image = image;
        this.isPriority = isPriority;
        this.isHidden = isHidden;
        this.notes = notes;
    }

    isValid(): boolean{
        if(this.title == "" ||
        this.description == ""||
        this.image == "" ||
        this.date == "" ){
            return false;
        }
        else{
            return true;
        }
    }
    addNote(note: string){
        this.notes.push(note);
        console.log(this);
    }
}