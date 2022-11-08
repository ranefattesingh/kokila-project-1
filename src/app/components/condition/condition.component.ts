import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MockConditionService } from 'src/app/mocks/mock';
import { ColumnName } from 'src/app/models/column_name.model';
import { LogicalOperator } from 'src/app/models/logical_operator.model';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {

  conditionForm: FormGroup;
  logicalOperators: LogicalOperator[] = []
  columnNames: ColumnName[] = []
  mockConditionService : MockConditionService = new MockConditionService()

  constructor() {
    this.conditionForm = this.newConditionForm()
    this.mockConditionService = new MockConditionService()
   }

  ngOnInit(): void {

  }

  private newConditionForm(): FormGroup {
    return new FormGroup({
      conditions: new FormArray([
        this.newCondition()
      ])
    })
  }

  private newCondition():FormGroup{
    let logicalOperators: FormControl[] = []
    this.mockConditionService.GetMockLogicalOperators().forEach(l => logicalOperators.push(new FormControl({
      id: l.ID,
      value: l.Name
    })))

    let columnNames: FormControl[] = []
    this.mockConditionService.GetMockColumnNames().forEach(l => columnNames.push(new FormControl({
      id: l.ID,
      value: l.Name
    })))

    let arithmeticOperators: FormControl[] = []
    this.mockConditionService.GetMockArithmeticOperators().forEach(l => arithmeticOperators.push(new FormControl({
      id: l.ID,
      value: l.Name
    })))

    let columnValues: FormControl[] = []
    this.mockConditionService.GetMockColumnValues().forEach(l => columnValues.push(new FormControl({
      id: l.ID,
      value: l.Name
    })))

    return new FormGroup({
      logicalOperators: new FormArray(logicalOperators),
      columnNames: new FormArray(columnNames),
      arithmeticOperators: new FormArray(arithmeticOperators),
      columnValues: new FormArray(columnValues),
    })
  }

  public AddCondition() {
    const control = <FormArray>this.conditionForm.controls['conditions']
    control.push(this.newCondition())
  }

  public RemoveCondition(index: number) {
    const control = <FormArray>this.conditionForm.controls['conditions']
    control.removeAt(index)
  }

  public GetConditions(): FormArray {
    return this.conditionForm.controls['conditions'] as FormArray
  }

  public GetLogicalOperators(index: number): FormArray {
    const condition = this.GetConditions().at(index) as FormGroup
    return condition.controls['logicalOperators'] as FormArray
  }

  public GetColumnNames(index: number): FormArray {
    const condition = this.GetConditions().at(index) as FormGroup
    return condition.controls['columnNames'] as FormArray
  }

  public GetArithmeticOperators(index: number): FormArray {
    const condition = this.GetConditions().at(index) as FormGroup
    return condition.controls['arithmeticOperators'] as FormArray
  }

  public GetColumnValues(index: number): FormArray {
    const condition = this.GetConditions().at(index) as FormGroup
    return condition.controls['columnValues'] as FormArray
  }

  public onAddConditionClick() {
    const conditions = this.GetConditions()
    conditions.push(this.newCondition())
  }

  public onDeleteConditionClick(i:number) {
    const conditions = this.GetConditions()
    conditions.removeAt(i)
  }
}
