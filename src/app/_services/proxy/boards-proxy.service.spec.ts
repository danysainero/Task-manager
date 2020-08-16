import { TestBed } from '@angular/core/testing';

import { BoardsProxyService } from './boards-proxy.service';

describe('BoardsProxyService', () => {
  let service: BoardsProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardsProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
