import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHocQuerySelectComponent } from './add-hoc-query-select.component';

describe('AddHocQuerySelectComponent', () => {
  let component: AddHocQuerySelectComponent;
  let fixture: ComponentFixture<AddHocQuerySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHocQuerySelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHocQuerySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
