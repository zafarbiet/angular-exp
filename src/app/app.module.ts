import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';

import { AppComponent } from './app.component';
import { EmployeePage } from './Employee/employee-page.component';
import { EmployeeService } from './Employee/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SortDirective } from './Employee/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePage,
    SortDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
