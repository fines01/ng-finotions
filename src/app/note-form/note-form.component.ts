import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})

export class NoteFormComponent implements OnInit {
  
  showForm:boolean = false;
  title!: string;
  body!: string;

  @Output() submitNote = new EventEmitter();

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSaveNote() {
    // TODO validate inputs
    this.submitNote.emit([this.title, this.body]);
    this.clearInputs();
  }

  clearInputs() {
    this.title = '';
    this.body = '';
  }

  constructor() { }
  ngOnInit(): void { }

}
