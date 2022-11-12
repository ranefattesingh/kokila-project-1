import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHocQueryConditionsComponent } from './add-hoc-query-conditions.component';

describe('AddHocQueryConditionsComponent', () => {
  let component: AddHocQueryConditionsComponent;
  let fixture: ComponentFixture<AddHocQueryConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHocQueryConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHocQueryConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
