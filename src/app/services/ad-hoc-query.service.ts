import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ColumnName } from '../models/ad-hoc-column-name.model';
import { ReportItem } from '../models/ad-hoc-report-item.model';

@Injectable({
  providedIn: 'root'
})
export class AdHocQueryService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getReportList():Observable<{
    items: ReportItem[]; 
    total: number;
  }>{
    return this.http.get('/assets/report-list.json').pipe(
      map((response: any) => {
        const items:ReportItem[] = response.result?.data.map((i:any) => {
          return new ReportItem(i)
        })
        return {
          items,
          total: response.result.total
        }
      })
    )
  }

  getColumnList():Observable<{
    items: ColumnName[]; 
    total: number;
  }>{
    return this.http.get('/assets/column-names.json').pipe(
      map((response: any) => {
        const items:ColumnName[] = response.result?.data.map((i:any) => {
          return new ReportItem(i)
        })
        return {
          items,
          total: response.result.total
        }
      })
    )
  }
}
