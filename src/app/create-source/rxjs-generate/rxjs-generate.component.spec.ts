import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsGenerateComponent } from './rxjs-generate.component';

describe('RxjsGenerateComponent', () => {
  let component: RxjsGenerateComponent;
  let fixture: ComponentFixture<RxjsGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
