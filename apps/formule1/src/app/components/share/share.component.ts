import { Component } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'f1-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {
  public githubUrl = 'http://github.com/martinspire/f1app/';
  public siteUrl = 'http://martinspire.github.io/f1app/';

  constructor(private ref: DialogRef) {}

  public close() {
    this.ref.close();
  }

  public copyUrl(url: string) {
    navigator.clipboard.writeText(url);
  }
}
