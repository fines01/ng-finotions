import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {

  notes = 
  [
    {title: "Example note title", body: "This is the content of your note. Click on the form above and add a new one. If you click on delete the note will be moved to the trash folder, from which you can restore the note or delete it permanently.", id:1},
    {title: "Delegation", body:"Q.: How many programmers does it take to change a light bulb? <br> A.: Null – This is a hardware problem.", id:2},
  ];

  trash: {title: string; body: string; id:number}[] = [];

  saveNote(note: string[]) {
    let newNote = {title: note[0], body: note[1], id: Date.now() }; // for now just timestamp as id
    this.notes.unshift(newNote);
    this.saveLocalData();
  }

  moveToTrash(note: [noteTitle: string, noteID: number]) { // title not actualy necessary
    //let noteTitle = note[0];
    console.log(note);
    let noteID = note[1];
    let targetIndex = this.notes.findIndex( el => {
      return el.id === noteID; // && el.title === noteTitle
    });
    this.trash.unshift(this.notes[targetIndex]);
    this.notes.splice(targetIndex,1);
    this.saveLocalData();
  }

  deleteNote(note: any[]){
    let targetID: number; // == note[0]
    this.trash = this.trash.filter( el=> {
      return !(el.id === targetID);
    });

  }

  // save data into local storage
  saveLocalData() {
    let notesAsString = JSON.stringify(this.notes);
    let trashAsString = JSON.stringify(this.trash);
    localStorage.setItem('notes', notesAsString);
    localStorage.setItem('trash', trashAsString);
  }

  // load data from local storage
  loadLocalData() {
    // get as strings
    let notesAsString = localStorage.getItem('notes');
    let trashAsString = localStorage.getItem('trash');
    // if data exists, parse strings and  save tem in arrays "titles" & "notes" speichern
    if(notesAsString) this.notes = JSON.parse(notesAsString);
    if( trashAsString ) this.trash = JSON.parse(trashAsString);
  } 

  constructor() { }

  ngOnInit(): void { 
    this.loadLocalData();
  }



}
