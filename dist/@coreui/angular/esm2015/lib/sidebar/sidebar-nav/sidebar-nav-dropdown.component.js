/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../sidebar-nav.service';
export class SidebarNavDropdownComponent {
    /**
     * @param {?} helper
     */
    constructor(helper) {
        this.helper = helper;
    }
}
SidebarNavDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-dropdown',
                template: `
    <a class="nav-link nav-dropdown-toggle"
       cuiNavDropdownToggle
       [cuiHtmlAttr]="item.attributes">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="helper.getIconClass(item)"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="helper.getBadgeClass(item)">{{ item.badge.text }}</span>
    </a>
    <cui-sidebar-nav-items
      class="nav-dropdown-items"
      [items]="item.children">
    </cui-sidebar-nav-items>
  `,
                providers: [SidebarNavHelper],
                styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                    '.nav-dropdown-items { display: block; }']
            }] }
];
/** @nocollapse */
SidebarNavDropdownComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
SidebarNavDropdownComponent.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SidebarNavDropdownComponent.prototype.item;
    /** @type {?} */
    SidebarNavDropdownComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQXVCeEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUd0QyxZQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzdCLENBQUM7OztZQTFCTixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkFLRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTt5QkFIN0IsMkNBQTJDO29CQUMzQyx5Q0FBeUM7YUFHNUM7Ozs7WUF0Qk8sZ0JBQWdCOzs7bUJBd0JyQixLQUFLOzs7O0lBQU4sMkNBQW1COztJQUdqQiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL3NpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhci1uYXYtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgbmF2LWRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgY3VpTmF2RHJvcGRvd25Ub2dnbGVcbiAgICAgICBbY3VpSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XG4gICAgICA8aSAqbmdJZj1cImhlbHBlci5oYXNJY29uKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaGVscGVyLmdldEljb25DbGFzcyhpdGVtKVwiPjwvaT5cbiAgICAgIDxuZy1jb250YWluZXI+e3tpdGVtLm5hbWV9fTwvbmctY29udGFpbmVyPlxuICAgICAgPHNwYW4gKm5nSWY9XCJoZWxwZXIuaGFzQmFkZ2UoaXRlbSlcIiBbbmdDbGFzc109XCJoZWxwZXIuZ2V0QmFkZ2VDbGFzcyhpdGVtKVwiPnt7IGl0ZW0uYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPGN1aS1zaWRlYmFyLW5hdi1pdGVtc1xuICAgICAgY2xhc3M9XCJuYXYtZHJvcGRvd24taXRlbXNcIlxuICAgICAgW2l0ZW1zXT1cIml0ZW0uY2hpbGRyZW5cIj5cbiAgICA8L2N1aS1zaWRlYmFyLW5hdi1pdGVtcz5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgJy5uYXYtZHJvcGRvd24tdG9nZ2xlIHsgY3Vyc29yOiBwb2ludGVyOyB9JyxcbiAgICAnLm5hdi1kcm9wZG93bi1pdGVtcyB7IGRpc3BsYXk6IGJsb2NrOyB9J1xuICBdLFxuICBwcm92aWRlcnM6IFsgU2lkZWJhck5hdkhlbHBlciBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkgeyB9XG59XG4iXX0=