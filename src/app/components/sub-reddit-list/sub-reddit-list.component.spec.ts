import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRedditListComponent } from './sub-reddit-list.component';

describe('SubRedditListComponent', () => {
  let component: SubRedditListComponent;
  let fixture: ComponentFixture<SubRedditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRedditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
