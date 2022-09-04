import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SampleLayoutComponent} from "./components/sample-layout/sample-layout.component";

const routes: Routes = [
  { path: '', component: SampleLayoutComponent },
  { path: 'mat-menu', component: SampleLayoutComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
