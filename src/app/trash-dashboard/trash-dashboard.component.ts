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

  loadData(): void {
    this.notes = this.noteService.getNotesData();
    this.trashNotes = this.noteService.getTrashData();
  }

  saveData(): void {
    this.noteService.setNotesData(this.notes);
    this.noteService.setTrashData(this.trashNotes);
  }

  onRestoreNote(id: number): void {
    let targetIndex = this.trashNotes.findIndex( el=> {
      return el.id === id;
    });
    console.log(targetIndex, this.trashNotes[targetIndex]);
    this.notes.unshift(this.trashNotes[targetIndex]);
    this.trashNotes.splice(targetIndex,1);
    this.saveData();
  }

  onDeleteNote(id: number): void {
    this.trashNotes = this.trashNotes.filter( (el) => {
      return (el.id !== id);
    });
    this.saveData();
  }

}
