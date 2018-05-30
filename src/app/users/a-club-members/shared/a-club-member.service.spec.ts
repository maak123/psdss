import { TestBed, inject } from '@angular/core/testing';

import { AClubMemberService } from './a-club-member.service';

describe('AClubMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AClubMemberService]
    });
  });

  it('should be created', inject([AClubMemberService], (service: AClubMemberService) => {
    expect(service).toBeTruthy();
  }));
});
