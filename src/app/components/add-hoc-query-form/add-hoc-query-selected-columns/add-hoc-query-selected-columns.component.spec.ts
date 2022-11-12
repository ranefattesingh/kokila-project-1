import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHocQuerySelectedColumnsComponent } from './add-hoc-query-selected-columns.component';

describe('AddHocQuerySelectedColumnsComponent', () => {
  let component: AddHocQuerySelectedColumnsComponent;
  let fixture: ComponentFixture<AddHocQuerySelectedColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHocQuerySelectedColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHocQuerySelectedColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
