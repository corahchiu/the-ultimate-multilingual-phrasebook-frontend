import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetRowComponent } from './target-row.component';

describe('TargetRowComponent', () => {
  let component: TargetRowComponent;
  let fixture: ComponentFixture<TargetRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
