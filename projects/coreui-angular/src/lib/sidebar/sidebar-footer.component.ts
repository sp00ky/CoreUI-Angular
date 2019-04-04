import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'cui-sidebar-footer',
  template: `<ng-content></ng-content>`
})
export class SidebarFooterComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'app-sidebar-footer');
  }

  ngOnInit() { }
}
