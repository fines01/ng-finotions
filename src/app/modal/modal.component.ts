import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;

  @Output() closeModal = new EventEmitter<boolean>(); //boolean or empty

  onEmitCloseEvent() {
    this.closeModal.emit(true); //emit: true, but I wouldn't really need to emit anything here
  }

  constructor() { }

  ngOnInit(): void {
  }

}
