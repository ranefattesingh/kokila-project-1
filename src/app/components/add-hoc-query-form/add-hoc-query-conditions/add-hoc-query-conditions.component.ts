import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-hoc-query-conditions',
  templateUrl: './add-hoc-query-conditions.component.html',
  styleUrls: ['./add-hoc-query-conditions.component.scss']
})
export class AddHocQueryConditionsComponent implements OnInit {

  @Input() conditionView:FormGroup = new FormGroup({})
  constructor() { }

  ngOnInit(): void {
    this.addNewCondition()
  }

  getConditions():FormArray<FormGroup>{
    return this.conditionView.controls["conditions"] as FormArray
  }

  getConditionColumnNames(index: number): FormArray {
    return this.getConditions().controls.at(index)?.get("columnNames") as FormArray
  }

  private addNewCondition(lastCondition?: FormGroup) {
    const conditions = this.getConditions()
    const newConditionFormGrpup = new FormGroup({
      logicals: new FormArray([]),
      columnNames: new FormArray([]),
      arithmetics: new FormArray([]),
      columnValues: new FormArray([]),
    })

    if(lastCondition == null) {
      conditions.push(newConditionFormGrpup)

      return
    }

    // add logicals
    const logicals = lastCondition.get("logicals") as FormArray
    logicals.controls.forEach(logical => {
      const newLogicals = newConditionFormGrpup.get("logicals") as FormArray
      newLogicals.push(new FormControl(logical.value))
    })

    // add columnNames
    const columnNames = lastCondition.get("columnNames") as FormArray
    columnNames.controls.forEach(columnName => {
      const newColumnNames = newConditionFormGrpup.get("columnNames") as FormArray
      newColumnNames.push(new FormControl(columnName.value))
    })

    // add arithmetics
    const arithmetics = lastCondition.get("arithmetics") as FormArray
    arithmetics.controls.forEach(arithmetic => {
      const newArithmetics = newConditionFormGrpup.get("arithmetics") as FormArray
      newArithmetics.push(new FormControl(arithmetic.value))
    })

    // add columnValues
    const columnValues = lastCondition.get("columnValues") as FormArray
    columnValues.controls.forEach(columnValue => {
      const newColumnValues = newConditionFormGrpup.get("columnValues") as FormArray
      newColumnValues.push(new FormControl(columnValue.value))
    })

    conditions.push(newConditionFormGrpup)
  }


  omAddNewConditionRowClick() {
    const conditions = this.getConditions()
    const lastCondition = conditions.at(conditions.length - 1)
    this.addNewCondition(lastCondition)
  }

  onDeleteConditionRowClick(index: number) {
    const conditions = this.getConditions()
    conditions.removeAt(index)
  }
}
