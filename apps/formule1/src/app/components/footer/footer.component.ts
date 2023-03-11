import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { ShareComponent } from '../share/share.component';

@Component({
  selector: 'f1-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  constructor(private modalService: ModalService<ShareComponent>) {}

  async showShare(): Promise<void> {
    const {ShareComponent} = await import(
      './../share/share.component'
    );

    await this.modalService.open(ShareComponent);
  }
}
