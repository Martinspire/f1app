import { Component } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { VERSION } from '../../../environments/version';

@Component({
  selector: 'f1-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  version = VERSION.version;

  constructor(private dialog: DialogService) { }

  async showShare(): Promise<void> {
    const { ShareComponent } = await import(
      './../share/share.component'
    );

    await this.dialog.open(ShareComponent);
  }
}
