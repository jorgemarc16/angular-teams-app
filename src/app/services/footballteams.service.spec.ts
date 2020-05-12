import { TestBed } from '@angular/core/testing';

import { FootballteamsService } from './footballteams.service';

describe('Footballteams.ServiceService', () => {
  let service: FootballteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
