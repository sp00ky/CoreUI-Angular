/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from '../sidebar-nav.service';
export class SidebarNavItemsComponent {
    /**
     * @param {?} router
     * @param {?} helper
     */
    constructor(router, helper) {
        this.router = router;
        this.helper = helper;
    }
}
SidebarNavItemsComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
SidebarNavItemsComponent.ctorParameters = () => [
    { type: Router },
    { type: SidebarNavHelper }
];
SidebarNavItemsComponent.propDecorators = {
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SidebarNavItemsComponent.prototype.items;
    /** @type {?} */
    SidebarNavItemsComponent.prototype.router;
    /** @type {?} */
    SidebarNavItemsComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUE4Q3hELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBRW5DLFlBQ1MsTUFBYyxFQUNkLE1BQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDOzs7WUFqREwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdDVDthQUNGOzs7O1lBL0NPLE1BQU07WUFFTixnQkFBZ0I7OztvQkErQ3JCLEtBQUs7Ozs7SUFBTix5Q0FBMkI7O0lBRXpCLDBDQUFxQjs7SUFDckIsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL3NpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhci1uYXYtaXRlbXMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImhlbHBlci5pdGVtVHlwZShpdGVtKVwiPlxuICAgICAgICA8Y3VpLXNpZGViYXItbmF2LWRyb3Bkb3duXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIFtjbGFzcy5vcGVuXT1cImhlbHBlci5pc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIlxuICAgICAgICAgIGN1aU5hdkRyb3Bkb3duXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIj5cbiAgICAgICAgPC9jdWktc2lkZWJhci1uYXYtZHJvcGRvd24+XG4gICAgICAgIDxjdWktc2lkZWJhci1uYXYtZGl2aWRlclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZGl2aWRlcidcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRDbGFzcyhpdGVtKVwiXG4gICAgICAgICAgW2N1aUh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxuICAgICAgICA8L2N1aS1zaWRlYmFyLW5hdi1kaXZpZGVyPlxuICAgICAgICA8Y3VpLXNpZGViYXItbmF2LXRpdGxlXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIid0aXRsZSdcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRDbGFzcyhpdGVtKVwiXG4gICAgICAgICAgW2N1aUh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxuICAgICAgICA8L2N1aS1zaWRlYmFyLW5hdi10aXRsZT5cbiAgICAgICAgPGN1aS1zaWRlYmFyLW5hdi1sYWJlbFxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIj5cbiAgICAgICAgPC9jdWktc2lkZWJhci1uYXYtbGFiZWw+XG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2VtcHR5J1wiPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGN1aS1zaWRlYmFyLW5hdi1saW5rXG4gICAgICAgICAgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRDbGFzcyhpdGVtKVwiPlxuICAgICAgICA8L2N1aS1zaWRlYmFyLW5hdi1saW5rPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbXM6IEFycmF5PGFueT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkge31cbn1cbiJdfQ==