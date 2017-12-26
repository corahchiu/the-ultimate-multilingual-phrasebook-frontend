import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasebookComponent } from './phrasebook.component';

describe('PhrasebookComponent', () => {
  let component: PhrasebookComponent;
  let fixture: ComponentFixture<PhrasebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
