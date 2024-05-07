import { TestBed } from '@angular/core/testing';

import { CommandeDetailsService } from './commande-details.service';

describe('CommandeDetailsService', () => {
  let service: CommandeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
