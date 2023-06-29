
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockInstance, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { WikiService } from '../../../services/api/wiki.service';

import { RaceBioComponent } from './race-bio.component';

import * as mockWikiImage from '../../../../../../../testing/mocks/wiki-image.json';
import * as mockWikiSummary from '../../../../../../../testing/mocks/wiki-summary.json';

// const testrace = mockRace.MRData.RaceTable.Races[0];
const wikiImage = Object.values(mockWikiImage.query.pages)[0];
const wikiSummary = Object.values(mockWikiSummary.query.pages)[0];

describe('RaceBioComponent', () => {
  const getWikiImage = () => of(wikiImage);
  const getWikiSummary = () => of(wikiSummary);

  MockInstance(WikiService, () => ({
    getWikiImage,
    getWikiSummary
  }));

  let spectator: Spectator<RaceBioComponent>;
  const createComponent = createComponentFactory({
    component: RaceBioComponent,
    providers: [MockProvider(WikiService)]
  });

  beforeEach(() => spectator = createComponent());

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should fill with data from service', () => {
    // spectator.setInput('race', testrace);

    // expect(spectator.query('h2')).toBeDefined();
    // expect(spectator.query('h2')).toHaveText('Race - Round  of');
  });
});
