import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRedditWrapperComponent } from './sub-reddit-wrapper.component';

describe('SubRedditWrapperComponent', () => {
  let component: SubRedditWrapperComponent;
  let fixture: ComponentFixture<SubRedditWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRedditWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
