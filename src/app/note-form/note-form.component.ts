import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})

export class NoteFormComponent implements OnInit {
  
  showForm:boolean = false;
  titleIsEmpty: boolean = false;
  bodyIsEmpty: boolean = false;
  newTitle!: string;
  newBody!: string;

  @Output() submitNote = new EventEmitter();

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSaveNote() {
    if (this.validateInputs()) {
      this.submitNote.emit([this.newTitle, this.newBody]);
      this.clearInputs();
    }
    else {
      this.removeBlinkAnimation();
      console.log('vaidation failed')
    }
  }

  // I could save new note in local storage here instead of emitting data into notes dashboard

  clearInputs() {
    this.newTitle = '';
    this.newBody = '';
  }

  validateInputs(){
    this.inputIsEmpty(this.newTitle) ? this.titleIsEmpty = true : this.titleIsEmpty = false;
    this.inputIsEmpty(this.newBody) ? this.bodyIsEmpty = true : this.bodyIsEmpty = false;
    if (this.titleIsEmpty || this. bodyIsEmpty ) return false;
    else return true;
  }
  
  inputIsEmpty(value: string | undefined){
    return (value === undefined || value.trim().length === 0);
  }
  
  removeBlinkAnimation() {
    setTimeout(()=> {
      this.titleIsEmpty = false;
      this.bodyIsEmpty = false;
    }, 600);
  }

  constructor() { }
  ngOnInit(): void { }

}
