import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AClubMembersComponent } from './a-club-members.component';

describe('AClubMembersComponent', () => {
  let component: AClubMembersComponent;
  let fixture: ComponentFixture<AClubMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AClubMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AClubMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
