import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogglerComponent } from './toggler.component';

@NgModule({
  declarations: [TogglerComponent],
  exports: [
    TogglerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TogglerModule { }
