import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ReportItem } from 'src/app/models/ad-hoc-report-item.model';

@Component({
  selector: 'app-add-hoc-query-selected-columns',
  templateUrl: './add-hoc-query-selected-columns.component.html',
  styleUrls: ['./add-hoc-query-selected-columns.component.scss']
})
export class AddHocQuerySelectedColumnsComponent implements OnInit {

  @Input() resultView:FormGroup = new FormGroup({})

  @Output() resultListItemClickEventEmitter = new EventEmitter<ReportItem>()

  constructor() { }

  ngOnInit(): void {
  }

  getResultViewList():FormArray {
    return this.resultView.controls["columnNames"] as FormArray
  }

  onResultListItemDeleteClick(item:ReportItem){
    this.resultListItemClickEventEmitter.emit(item)
  }
}
