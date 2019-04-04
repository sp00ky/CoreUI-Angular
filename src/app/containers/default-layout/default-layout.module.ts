import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AsideModule,
  BreadcrumbModule,
  HeaderModule,
  FooterModule,
  SidebarModule,
} from '@coreui/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AsideModule,
    BreadcrumbModule.forRoot(),
    FooterModule,
    HeaderModule,
    SidebarModule,
  ]
})
export class DefaultLayoutModule { }
