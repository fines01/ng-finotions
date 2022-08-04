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

}
