import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-hoc-query-conditions',
  templateUrl: './add-hoc-query-conditions.component.html',
  styleUrls: ['./add-hoc-query-conditions.component.scss']
})
export class AddHocQueryConditionsComponent implements OnInit {

  @Input() conditionView:FormGroup = new FormGroup({})
  constructor() { }

  ngOnInit(): void {
  }

  getConditionViewColumnNames():FormArray{
    return this.conditionView.controls["columnNames"] as FormArray
  }
}
