import { TestBed } from '@angular/core/testing';

import { WordleWordsService } from './wordle-words.service';

describe('WordleWordsService', () => {
  let service: WordleWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordleWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
