import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ExpandableRowsModule
  ],
  exports: [   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
