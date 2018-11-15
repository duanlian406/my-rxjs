import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastOperatorsComponent } from './multicast-operators.component';

describe('MulticastOperatorsComponent', () => {
  let component: MulticastOperatorsComponent;
  let fixture: ComponentFixture<MulticastOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticastOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticastOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
