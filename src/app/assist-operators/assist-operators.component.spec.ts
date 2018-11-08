import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistOperatorsComponent } from './assist-operators.component';

describe('AssistOperatorsComponent', () => {
  let component: AssistOperatorsComponent;
  let fixture: ComponentFixture<AssistOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
