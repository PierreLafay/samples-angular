import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { SampleLayoutComponent } from './components/sample-layout/sample-layout.component';


@NgModule({
  declarations: [
    SampleLayoutComponent
  ],
  imports: [
    CommonModule,
    SamplesRoutingModule
  ]
})
export class SamplesModule { }
