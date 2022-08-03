import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;
  @Input() id!: number;

  @Output() trashNote = new EventEmitter();

  onMoveToTrash() {
    this.trashNote.emit([this.title, this.id]);
    // 1.: delete from local storage OR:
    // 2.: send notes data to dashboard and delete/move from there (check, local storage etc is handled there)
    console.log('delete note: ', this.title, ' id: ', this.id);
  }

  constructor() { }

  ngOnInit(): void { }

}
