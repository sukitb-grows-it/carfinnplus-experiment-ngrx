import { TestBed } from '@angular/core/testing';

import { HtmlToImageService } from './html-to-image.service';

describe('HtmlToImageService', () => {
  let service: HtmlToImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlToImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
