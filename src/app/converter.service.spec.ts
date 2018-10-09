import { TestBed, inject } from '@angular/core/testing';

import { ConverterService } from './converter.service';

describe('CsvconverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConverterService]
    });
  });

  it('should be created', inject([ConverterService], (service: ConverterService) => {
    expect(service).toBeTruthy();
  }));
});
