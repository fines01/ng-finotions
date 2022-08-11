import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor() { }

  notes = 
  [
    {title: "Example Note Title", body: `Welcome! \n\n Click on the form above to add a new note. \n\n If you click 'Trash' the note will be moved to the trash folder, from which you can restore it later or delete it permanently.\n\n`, id:1},
  ];

  trashNotes: {title: string; body: string; id:number}[] = [];

  getNotesData() {
    this.loadLocalData();
    return this.notes;
  }

  getTrashData() {
    this.loadLocalData();
    return this.trashNotes;
  }

  setNotesData(notes: any[]) {
    this.notes = notes;
    this.saveLocalData(this.notes);
  }

  setTrashData(trash: any[]) {
    this.trashNotes = trash;
    this.saveLocalData(this.trashNotes);
  }

   // save data into local storage
  saveLocalData(data: any[]) {
    let stringifiedData = JSON.stringify(data);
    let storageName = this.resolveName(data);
    if (typeof storageName == 'string') localStorage.setItem(storageName, stringifiedData);
  }

  // load data from local storage
  loadLocalData() {
    // get as strings
    let stringifiedNotes = localStorage.getItem('notes');
    let stringifiedTrash = localStorage.getItem('trash');
    // if data exists, parse strings and  save tem in arrays "titles" & "notes" speichern
    if(stringifiedNotes) this.notes = JSON.parse(stringifiedNotes);
    if( stringifiedTrash ) this.trashNotes = JSON.parse(stringifiedTrash);
  }

  resolveName(data: any[]): string | void {
    if (data === this.notes) return 'notes';
    if (data === this.trashNotes) return 'trash';
  }

}
