
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockInstance, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { WikiService } from './../../../services/api/wiki.service';

import { DriverBioComponent } from './driver-bio.component';

import * as mockDriver from '../../../../../../../testing/mocks/driver-verstappen.json';
import * as mockWikiImage from '../../../../../../../testing/mocks/wiki-image.json';
import * as mockWikiSummary from '../../../../../../../testing/mocks/wiki-summary.json';

const testdriver = mockDriver.MRData.DriverTable.Drivers[0];
const wikiImage = Object.values(mockWikiImage.query.pages)[0];
const wikiSummary = Object.values(mockWikiSummary.query.pages)[0];

describe('DriverBioComponent', () => {
  const getWikiImage = () => of(wikiImage);
  const getWikiSummary = () => of(wikiSummary);

  MockInstance(WikiService, () => ({
    getWikiImage,
    getWikiSummary
  }));

  let spectator: Spectator<DriverBioComponent>;
  const createComponent = createComponentFactory({
    component: DriverBioComponent,
    providers: [MockProvider(WikiService)]
  });

  beforeEach(() => spectator = createComponent());

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should fill with data from service', () => {
    spectator.setInput('driver', testdriver);

    expect(spectator.query('h2')).toBeDefined();
    expect(spectator.query('h2')).toHaveText('Max Verstappen');
  });
});
