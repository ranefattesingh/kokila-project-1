import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';

import { AddHocQuerySelectComponent } from './components/add-hoc-query-form/add-hoc-query-select/add-hoc-query-select.component';
import { AddHocQueryConditionsComponent } from './components/add-hoc-query-form/add-hoc-query-conditions/add-hoc-query-conditions.component';
import { AddHocQueryFormComponent } from './components/add-hoc-query-form/add-hoc-query-form.component';
import { AddHocQuerySelectedColumnsComponent } from './components/add-hoc-query-form/add-hoc-query-selected-columns/add-hoc-query-selected-columns.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddHocQueryFormComponent,
    AddHocQuerySelectComponent,
    AddHocQueryConditionsComponent,
    AddHocQuerySelectedColumnsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
