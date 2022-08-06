import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  editMode: boolean = false;
  trashView: boolean = false;

  @Input() title!: string;
  @Input() body!: string;
  @Input() id!: number;

  newTitle!: string;
  newBody!: string;

  @Output() trashNote = new EventEmitter();
  @Output() editNote = new EventEmitter();
  @Output() deleteNote = new EventEmitter();
  @Output() restoreNote = new EventEmitter();

  constructor( public router: Router ) { }
  
  ngOnInit(): void { 
    this.trashView = (this.router.url === '/trash');
  }

  emitTrashEvent() {
    this.trashNote.emit(this.id);
  }

  emitEditEvent() {
    this.closeEdit();
    this.editNote.emit([this.title, this.body, this.id]);
  }

  emitDeleteEvent() {
    this.deleteNote.emit(this.id);
  }

  emitRestoreEvent() {
    this.restoreNote.emit(this.id);
  }

  closeEdit() {
    this.editMode = false;
  }

  openEdit() {
    this.editMode = true;
  }

  resetInputs() {
    this.title = this.title;
    this.body = this.body;
  }

}
