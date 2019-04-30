import {Component, ElementRef, Input, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'cui-header',
  template: `<ng-content></ng-content>`
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() fixed: boolean;

  private readonly fixedClass = 'c-header-fixed';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'c-header');
    renderer.addClass(hostElement.nativeElement, 'c-header-light');
  }

  ngOnInit(): void {
    this.isFixed(this.fixed);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.hostElement.nativeElement, this.fixedClass);
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.hostElement.nativeElement, this.fixedClass);
    }
  }
}
