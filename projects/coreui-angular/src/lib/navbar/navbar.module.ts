import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '../shared/layout/layout.module';
import { NavbarBrandComponent } from './navbar-brand.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    NavbarBrandComponent,
    LayoutModule
  ],
  declarations: [
    NavbarBrandComponent
  ]
})
export class NavbarModule {}
