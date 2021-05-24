import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostsComponent } from './hosts.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MultiSelectComponent } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    HostsComponent,
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    HostsComponent
  ]
})
export class HostsModule {}