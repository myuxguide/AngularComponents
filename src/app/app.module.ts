import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpandableRowsModule } from './expandable-rows/expandable-rows.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpandableRowsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    AngularMultiSelectModule
  ],
  exports: [   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
