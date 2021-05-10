import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ExpandableRowsComponent } from './expandable-rows.component';
import { TableHeadingComponent } from './tableHeading.component';
import { HostsModule } from './hosts/hosts.module';

@NgModule({
  declarations: [
    ExpandableRowsComponent,
    TableHeadingComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HostsModule
  ],
  exports: [
    ExpandableRowsComponent
  ]
})
export class ExpandableRowsModule { }
