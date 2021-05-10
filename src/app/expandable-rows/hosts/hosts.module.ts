import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostsComponent } from './hosts.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NameComponent } from './name.component';

@NgModule({
  declarations: [
    HostsComponent,
    NameComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    HostsComponent
  ]
})
export class HostsModule { }
