/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScreenService } from './screen.service';

describe('Service: Screen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreenService]
    });
  });

  it('should ...', inject([ScreenService], (service: ScreenService) => {
    expect(service).toBeTruthy();
  }));
});
