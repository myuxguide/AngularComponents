import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ExpandableRowsComponent } from './expandable-rows.component';
import { TableHeadingComponent } from './tableHeading.component';
import { HostsComponent } from './hosts/hosts.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AddBatchComponent } from './add-batch/add-batch.component';

@NgModule({
  declarations: [
    ExpandableRowsComponent,
    TableHeadingComponent,
    HostsComponent,
    AddBatchComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    AngularMultiSelectModule
  ],
  exports: [
    ExpandableRowsComponent
  ]
})
export class ExpandableRowsModule { }
