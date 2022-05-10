import { WikiService } from './../../../services/wiki.service';

import { DriverBioComponent } from './driver-bio.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

describe('DriverBioComponent', () => {

  let spectator: Spectator<DriverBioComponent>;
  const createComponent = createComponentFactory({
    component: DriverBioComponent,
    mocks: [WikiService]
  });

  beforeEach(() => spectator = createComponent());

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });
});
