import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizPageComponent } from './biz-page/biz-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BizPageComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class TemplatesModule { }
