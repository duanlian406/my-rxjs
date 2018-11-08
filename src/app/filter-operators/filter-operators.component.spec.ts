import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOperatorsComponent } from './filter-operators.component';

describe('FilterOperatorsComponent', () => {
  let component: FilterOperatorsComponent;
  let fixture: ComponentFixture<FilterOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
