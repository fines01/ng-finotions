import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {

  notes: {title: string; body: string; id:number}[] = [];
  trashNotes: {title: string; body: string; id:number}[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {     
    this.loadData();
  }

  loadData() {
    this.notes = this.noteService.getNotesData();
    this.trashNotes = this.noteService.getTrashData();
  }

  saveData() {
    this.noteService.setNotesData(this.notes);
    this.noteService.setTrashData(this.trashNotes);
  }


  saveNote(note: string[]) {
    let newNote = {title: note[0], body: note[1], id: Date.now() }; // for now just timestamp as id
    this.notes.unshift(newNote);
    this.saveData();
  }

  moveToTrash(note: [noteTitle: string, noteID: number]) { // title not actualy necessary
    //let noteTitle = note[0];
    let noteID = note[1];
    let targetIndex = this.notes.findIndex( el => {
      return el.id === noteID; // && el.title === noteTitle
    });
    this.trashNotes.unshift(this.notes[targetIndex]);
    this.notes.splice(targetIndex,1);
    this.saveData();
  }

  deleteNote(note: any[]){
    let targetID: number; // == note[0]
    this.trashNotes = this.trashNotes.filter( el=> {
      return !(el.id === targetID);
    });

  }

}
