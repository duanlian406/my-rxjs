import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformOperatorsComponent } from './transform-operators.component';

describe('TransformOperatorsComponent', () => {
  let component: TransformOperatorsComponent;
  let fixture: ComponentFixture<TransformOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
