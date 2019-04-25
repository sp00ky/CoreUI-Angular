import {Component, ElementRef, Input, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'cui-header',
  template: `<ng-content></ng-content>`
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() fixed: boolean;

  private readonly fixedClass = 'header-fixed';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'app-header');
    renderer.addClass(hostElement.nativeElement, 'navbar');
  }

  ngOnInit(): void {
    this.isFixed(this.fixed);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }
}
