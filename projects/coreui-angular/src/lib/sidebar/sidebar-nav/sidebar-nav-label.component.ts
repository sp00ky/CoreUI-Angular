import {Component, Input, OnInit} from '@angular/core';
import {SidebarNavHelper} from '../sidebar-nav.service';

@Component({
  selector: 'cui-sidebar-nav-label',
  templateUrl: './sidebar-nav-label.component.html'
})
export class SidebarNavLabelComponent implements OnInit {
  @Input() item: any;

  constructor(
    public helper: SidebarNavHelper
  ) { }

  ngOnInit() {
  }

  getItemClass() {
    const labelClass = {
      'nav-label': true,
      'active': true
    };
    const itemClass = this.item.class;
    labelClass[itemClass] = !!itemClass;
    return labelClass;
  }
  getLabelIconClass() {
    const classes = this.helper.getIconClass(this.item);
    const variant = `text-${this.item.label.variant}`;
    classes[variant] = !!variant;
    const labelClass = this.item.label.class;
    classes[labelClass] = !!labelClass;
    return classes;
  }
}
