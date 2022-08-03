import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {

  notes: any[] = 
  [
    {title: "Example note title", body: "This is the content of your note. Click on the form above and add a new one. If you click on delete the note will be moved to the trash folder, from which you can restore the note or delete it permanently.", id:1},
    {title: "Delegation", body:"Q.: How many programmers does it take to change a light bulb? A.: Null – This is a hardware problem.", id:2},
  ];

  trash!: any[];

  saveNote(note: string[]) {
    let newNote = {title: note[0], body: note[1], id: Date.now() }; // for now just timestamp as id
    this.notes.unshift(newNote);
    this.saveDataInLocalStorage();
  }

  moveToTrash(note: any[]) {
    console.log(note);
    // filter correct note from notes
    // push into this.trash & remove from notes
    // update local storage
  }

  // save data into local storage
  saveDataInLocalStorage() {
    let notesAsString = JSON.stringify(this.notes);
    let trashAsString = JSON.stringify(this.trash);
    localStorage.setItem('notes', notesAsString);
    localStorage.setItem('trash', trashAsString);
  }

  // load data from local storage
  loadDataFromLocalStorage() {
    // get as strings
    let notesAsString = localStorage.getItem('notes');
    let trashAsString = localStorage.getItem('trash');
    // if data exists, parse strings and  save tem in arrays "titles" & "notes" speichern
    if(notesAsString) this.notes = JSON.parse(notesAsString);
    if( trashAsString ) this.trash = JSON.parse(trashAsString);
  } 

  constructor() { }

  ngOnInit(): void { 
    this.loadDataFromLocalStorage();
  }



}
