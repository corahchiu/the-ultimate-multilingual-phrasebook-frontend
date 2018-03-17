import { TestBed, inject } from '@angular/core/testing';

import { SearchPhraseService } from './search-phrase.service';

describe('SearchPhraseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchPhraseService]
    });
  });

  it('should be created', inject([SearchPhraseService], (service: SearchPhraseService) => {
    expect(service).toBeTruthy();
  }));
});
