import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cui-sidebar-nav-divider',
  template: ``
})
export class SidebarNavDividerComponent implements OnInit {
  @Input() item: any;

  constructor () {}

  ngOnInit() {}
}
