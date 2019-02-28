import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BizPageComponent } from './templates/biz-page/biz-page.component';

const routes: Routes = [
  { path: 'biz-page', component: BizPageComponent },
  
  { path: '', component: BizPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
