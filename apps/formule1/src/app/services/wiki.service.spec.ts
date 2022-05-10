import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { WikiService } from './wiki.service';
import { ApiService } from './api.service';
import { AppConstant } from '../constants/app.constants';

import * as mockWikiImage from '../../../../../testing/mocks/wiki-image.json';
import * as mockWikiSummary from '../../../../../testing/mocks/wiki-summary.json';

describe('Service: Wiki', () => {

  let spectator: SpectatorHttp<WikiService>;
  const createHttp = createHttpFactory({
    service: WikiService,
    mocks: [ApiService]
  });

  beforeEach(() => spectator = createHttp());

  it('can test getWikiImage', () => {
    const query = 'test123';
    spectator.service.getWikiImage(query).subscribe();
    const req = spectator.expectOne(AppConstant.wikiImageUrl + query, HttpMethod.GET);
    req.flush(mockWikiImage);
  });

  it('can test getWikiSummary', () => {
    const query = 'test123';
    spectator.service.getWikiSummary(query).subscribe();
    const req = spectator.expectOne(AppConstant.wikiSummaryUrl + query, HttpMethod.GET);
    req.flush(mockWikiSummary);
  });
});

