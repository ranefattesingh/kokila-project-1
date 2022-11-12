import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReportItem } from 'src/app/models/ad-hoc-report-item.model';

@Component({
  selector: 'app-add-hoc-query-select',
  templateUrl: './add-hoc-query-select.component.html',
  styleUrls: ['./add-hoc-query-select.component.scss']
})
export class AddHocQuerySelectComponent implements OnInit {

  @Input() selectView:FormGroup = new FormGroup({})

  @Output() selectedReportItemEventEmitter = new EventEmitter<ReportItem>()
  @Output() viewListItemClickEventEmitter = new EventEmitter<ReportItem>()

  constructor() { }

  ngOnInit(): void {

  }

  getSelectViewReportList():FormArray {
    return this.selectView.controls["reportList"] as FormArray
  }

  getSelectViewColumnNames():FormArray {
    return this.selectView.controls["columnNames"] as FormArray
  }

  onSelectReport(selection: ReportItem){
    this.selectedReportItemEventEmitter.emit(selection)
  }

  onViewListItemAddClick(item:ReportItem){
    this.viewListItemClickEventEmitter.emit(item)
  }

}
