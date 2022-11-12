import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHocQueryFormComponent } from './add-hoc-query-form.component';

describe('AddHocQueryFormComponent', () => {
  let component: AddHocQueryFormComponent;
  let fixture: ComponentFixture<AddHocQueryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHocQueryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHocQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
