import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AClubMemberComponent } from './a-club-member.component';

describe('AClubMemberComponent', () => {
  let component: AClubMemberComponent;
  let fixture: ComponentFixture<AClubMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AClubMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AClubMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
