import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {SidebarNavHelper} from '../sidebar-nav.service';

@Component({
  selector: 'cui-sidebar-nav-items',
  template: `
    <ng-container *ngFor="let item of items">
      <ng-container [ngSwitch]="helper.itemType(item)">
        <cui-sidebar-nav-dropdown
          *ngSwitchCase="'dropdown'"
          [item]="item"
          [class.open]="helper.isActive(router, item)"
          [ngClass]="helper.getClass(item)"
          cuiNavDropdown
          routerLinkActive="open">
        </cui-sidebar-nav-dropdown>
        <cui-sidebar-nav-divider
          *ngSwitchCase="'divider'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [cuiHtmlAttr]="item.attributes">
        </cui-sidebar-nav-divider>
        <cui-sidebar-nav-title
          *ngSwitchCase="'title'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [cuiHtmlAttr]="item.attributes">
        </cui-sidebar-nav-title>
        <cui-sidebar-nav-label
          *ngSwitchCase="'label'"
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </cui-sidebar-nav-label>
        <ng-container
          *ngSwitchCase="'empty'">
        </ng-container>
        <cui-sidebar-nav-link
          *ngSwitchDefault
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </cui-sidebar-nav-link>
      </ng-container>
    </ng-container>
  `
})
export class SidebarNavItemsComponent {
  @Input() items: Array<any>;
  constructor(
    public router: Router,
    public helper: SidebarNavHelper
  ) {}
}
