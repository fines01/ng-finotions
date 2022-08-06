import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-trash-dashboard',
  templateUrl: './trash-dashboard.component.html',
  styleUrls: ['./trash-dashboard.component.scss']
})
export class TrashDashboardComponent implements OnInit {

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

  onRestoreNote(id: number) {
    let targetIndex = this.notes.findIndex( el=> {
      return el.id === id;
    });
    this.notes.unshift(this.notes[targetIndex]);
    this.trashNotes.splice(targetIndex,1);
    this.saveData();
  }

  onDeleteNote(id: number){
    console.log('received ', id);
    let targetID: number; // == note[0]
    this.trashNotes = this.trashNotes.filter( el=> {
      return !(el.id === targetID);
    });
    this.saveData();
  }

}
