import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'cui-sidebar-header',
  template: `<ng-content></ng-content>`
})
export class SidebarHeaderComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'sidebar-header');
  }

  ngOnInit() { }
}
