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

  @Output() trashNote = new EventEmitter<number>();
  @Output() editNote = new EventEmitter<[string,string,number]>();
  @Output() deleteNote = new EventEmitter<number>();
  @Output() restoreNote = new EventEmitter<number>();

  constructor( public router: Router ) { }
  
  ngOnInit(): void { 
    this.trashView = (this.router.url === '/trash');
  }

  emitTrashEvent(): void {
    this.trashNote.emit(this.id);
  }

  emitEditEvent(): void {
    this.closeEdit();
    this.editNote.emit([this.title, this.body, this.id]);
  }

  emitDeleteEvent(): void {
    this.deleteNote.emit(this.id);
  }

  emitRestoreEvent(): void {
    this.restoreNote.emit(this.id);
  }

  closeEdit(): void {
    this.editMode = false;
  }

  openEdit(): void {
    this.editMode = true;
  }

  resetInputs(): void {
    this.title = this.title;
    this.body = this.body;
  }

}
