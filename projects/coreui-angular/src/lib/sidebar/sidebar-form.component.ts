import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'cui-sidebar-form',
  template: `<ng-content></ng-content>`
})
export class SidebarFormComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'sidebar-form');
  }
  ngOnInit() { }
}
