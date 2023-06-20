import { Component } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'f1-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public ref: DialogRef) {}

  close() {
    this.ref.close();
  }
}
