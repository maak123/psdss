import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AClubMemberListComponent } from './a-club-member-list.component';

describe('AClubMemberListComponent', () => {
  let component: AClubMemberListComponent;
  let fixture: ComponentFixture<AClubMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AClubMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AClubMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
