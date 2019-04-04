import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../shared/layout/layout.module';

import { AsideComponent } from './aside.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    AsideComponent,
    LayoutModule
  ],
  declarations: [
    AsideComponent
  ]
})
export class AsideModule {}
