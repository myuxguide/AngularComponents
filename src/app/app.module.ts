import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpandableRowsModule } from './expandable-rows/expandable-rows.module';
import { NitinComponent } from './nitin/nitin.component';
import { TejasviComponent } from './tejasvi/tejasvi.component';

@NgModule({
  declarations: [
    AppComponent,
    NitinComponent,
    TejasviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpandableRowsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
