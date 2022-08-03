import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})

export class NoteFormComponent implements OnInit {
  
  showForm:boolean = false;
  newTitle!: string;
  newBody!: string;

  @Output() submitNote = new EventEmitter();

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSaveNote() {
    // TODO validate inputs
    this.submitNote.emit([this.newTitle, this.newBody]);
    this.clearInputs();
  }

  // I could save new note in local storage here instead of emitting data into notes dashboard

  clearInputs() {
    this.newTitle = '';
    this.newBody = '';
  }

  constructor() { }
  ngOnInit(): void { }

}
