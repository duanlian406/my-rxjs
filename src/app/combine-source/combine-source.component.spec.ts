import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineSourceComponent } from './combine-source.component';

describe('CombineSourceComponent', () => {
  let component: CombineSourceComponent;
  let fixture: ComponentFixture<CombineSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
