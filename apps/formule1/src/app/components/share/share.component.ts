import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'f1-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  public url = '';

  constructor(
    private modalService: ModalService<ShareComponent>
    ) {
  }

  ngOnInit() {
    const current = location.href;
    const github = 'http://martinspire.github.io/f1app/'
    this.url = current.indexOf('localhost') > -1 ? github : current;
  }

  public close() {
    this.modalService.close();
  }

  public copyUrl() {
    navigator.clipboard.writeText(this.url);
  }
}
