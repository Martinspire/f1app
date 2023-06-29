import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRef } from '@ngneat/dialog';
import { QRCodeComponent } from 'angularx-qrcode';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ModalComponent } from '../modal/modal.component';
import { ShareComponent } from './share.component';

describe('ShareComponent', () => {
  let component: ShareComponent;
  let fixture: ComponentFixture<ShareComponent>;
  const mockDialogRef = MockProvider(DialogRef);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareComponent, MockComponent(ModalComponent), MockComponent(QRCodeComponent)],
      providers: [mockDialogRef]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
