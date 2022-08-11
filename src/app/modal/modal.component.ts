import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;

  @Output() closeModal = new EventEmitter(); //boolean?

  onCloseModal() {
    this.closeModal.emit(); //emit: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
