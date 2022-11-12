import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReportItem } from 'src/app/models/ad-hoc-report-item.model';
import { AdHocQueryService } from 'src/app/services/ad-hoc-query.service';

@Component({
  selector: 'app-add-hoc-query-form',
  templateUrl: './add-hoc-query-form.component.html',
  styleUrls: ['./add-hoc-query-form.component.scss']
})
export class AddHocQueryFormComponent implements OnInit {

  queryForm

  constructor(
      private service:AdHocQueryService, 
      private formBuilder:FormBuilder,
    ) {

      this.queryForm = this.formBuilder.group({
        selectView: this.formBuilder.group({
          reportList: new FormArray([]),
          columnNames: new FormArray([]),
        }),
        resultView: this.formBuilder.group({
          columnNames: new FormArray([])
        }),
        conditionView: this.formBuilder.group({
          conditions: new FormArray<FormGroup>([]),
        })
      })
    }

  ngOnInit(): void {
    this.service.getColumnList().subscribe({
      next:(data) =>{
        const reportList = this.getSelectViewReportList()
        data.items.forEach(reportItem => {
          reportList.controls.push(new FormControl(reportItem))
        })
      }
    })
  }

  getSelectView():FormGroup {
    return this.queryForm.get('selectView') as FormGroup
  }

  getResultView():FormGroup {
    return this.queryForm.get("resultView") as FormGroup
  }

  getConditionView():FormGroup {
    return this.queryForm.get("conditionView") as FormGroup
  }

  getSelectViewReportList():FormArray {
    return this.getSelectView().get("reportList") as FormArray
  }

  getSelectViewColumnNames():FormArray {
    return this.getSelectView().get("columnNames") as FormArray
  }

  getResultViewList():FormArray {
    return this.getResultView().get("columnNames") as FormArray
  }

  getConditionList():FormArray{
    return this.getConditionView().get("conditions") as FormArray
  }

  onSelectReport(item: ReportItem){
    const columnNames = this.getSelectViewColumnNames()
    columnNames.push(new FormControl(item))
  }

  onViewListItemAddClick(item:ReportItem){
    const viewListColumnNames = this.getResultViewList()
    viewListColumnNames.push(new FormControl(item))
    
    const conditionList = this.getConditionList()
    conditionList.controls.forEach(conditon => {
      const columnNames = conditon.get("columnNames") as FormArray
      columnNames.push(new FormControl(item))
    })

    const selectViewListColumnNames = this.getSelectViewColumnNames()
    const index = selectViewListColumnNames.controls.findIndex(x => x.value == item)
    if(index != -1) {
      selectViewListColumnNames.removeAt(index)
    }
  }

  onResultListItemDeleteClick(item:ReportItem){
    const selectViewListColumnNames = this.getSelectViewColumnNames()
    selectViewListColumnNames.push(new FormControl(item))
    
    const viewListColumnNames = this.getResultViewList()
    const viewListColumnNameIndex = viewListColumnNames.controls.findIndex(x => x.value == item)
    if(viewListColumnNameIndex != -1) {
      viewListColumnNames.removeAt(viewListColumnNameIndex)
    }

    const conditionList = this.getConditionList()
    conditionList.controls.forEach(conditon => {
      const columnNames = conditon.get("columnNames") as FormArray
      const columnNameIndex = columnNames.controls.findIndex(x => x.value == item)
      if(columnNameIndex != -1) {
        columnNames.removeAt(columnNameIndex)
      }
    })
  }
}
