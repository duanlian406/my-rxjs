import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuntionReactiveProgrammingComponent } from './funtion-reactive-programming.component';

describe('FuntionReactiveProgrammingComponent', () => {
  let component: FuntionReactiveProgrammingComponent;
  let fixture: ComponentFixture<FuntionReactiveProgrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuntionReactiveProgrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuntionReactiveProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
