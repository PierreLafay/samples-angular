import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/components/home-page/home-page.component";

const routes: Routes = [
  { path: 'samples', loadChildren: () => import('./samples/samples.module').then(m => m.SamplesModule) },
  { path: '', component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

