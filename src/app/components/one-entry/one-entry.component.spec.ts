import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneEntryComponent } from './one-entry.component';

describe('OneEntryComponent', () => {
  let component: OneEntryComponent;
  let fixture: ComponentFixture<OneEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
