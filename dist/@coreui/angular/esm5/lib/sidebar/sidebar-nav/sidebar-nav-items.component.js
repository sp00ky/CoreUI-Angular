/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from '../sidebar-nav.service';
var SidebarNavItemsComponent = /** @class */ (function () {
    function SidebarNavItemsComponent(router, helper) {
        this.router = router;
        this.helper = helper;
    }
    SidebarNavItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-sidebar-nav-items',
                    template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <cui-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"helper.getClass(item)\"\n          cuiNavDropdown\n          routerLinkActive=\"open\">\n        </cui-sidebar-nav-dropdown>\n        <cui-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"helper.getClass(item)\"\n          [cuiHtmlAttr]=\"item.attributes\">\n        </cui-sidebar-nav-divider>\n        <cui-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"helper.getClass(item)\"\n          [cuiHtmlAttr]=\"item.attributes\">\n        </cui-sidebar-nav-title>\n        <cui-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"helper.getClass(item)\">\n        </cui-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <cui-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"helper.getClass(item)\">\n        </cui-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    SidebarNavItemsComponent.ctorParameters = function () { return [
        { type: Router },
        { type: SidebarNavHelper }
    ]; };
    SidebarNavItemsComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return SidebarNavItemsComponent;
}());
export { SidebarNavItemsComponent };
if (false) {
    /** @type {?} */
    SidebarNavItemsComponent.prototype.items;
    /** @type {?} */
    SidebarNavItemsComponent.prototype.router;
    /** @type {?} */
    SidebarNavItemsComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQ7SUE4Q0Usa0NBQ1MsTUFBYyxFQUNkLE1BQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDOztnQkFqREwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxpNENBd0NUO2lCQUNGOzs7O2dCQS9DTyxNQUFNO2dCQUVOLGdCQUFnQjs7O3dCQStDckIsS0FBSzs7SUFLUiwrQkFBQztDQUFBLEFBbERELElBa0RDO1NBTlksd0JBQXdCOzs7SUFDbkMseUNBQTJCOztJQUV6QiwwQ0FBcUI7O0lBQ3JCLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VpLXNpZGViYXItbmF2LWl0ZW1zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJoZWxwZXIuaXRlbVR5cGUoaXRlbSlcIj5cbiAgICAgICAgPGN1aS1zaWRlYmFyLW5hdi1kcm9wZG93blxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJoZWxwZXIuaXNBY3RpdmUocm91dGVyLCBpdGVtKVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCJcbiAgICAgICAgICBjdWlOYXZEcm9wZG93blxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJvcGVuXCI+XG4gICAgICAgIDwvY3VpLXNpZGViYXItbmF2LWRyb3Bkb3duPlxuICAgICAgICA8Y3VpLXNpZGViYXItbmF2LWRpdmlkZXJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2RpdmlkZXInXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIlxuICAgICAgICAgIFtjdWlIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPC9jdWktc2lkZWJhci1uYXYtZGl2aWRlcj5cbiAgICAgICAgPGN1aS1zaWRlYmFyLW5hdi10aXRsZVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIndGl0bGUnXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIlxuICAgICAgICAgIFtjdWlIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPC9jdWktc2lkZWJhci1uYXYtdGl0bGU+XG4gICAgICAgIDxjdWktc2lkZWJhci1uYXYtbGFiZWxcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCI+XG4gICAgICAgIDwvY3VpLXNpZGViYXItbmF2LWxhYmVsPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidlbXB0eSdcIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxjdWktc2lkZWJhci1uYXYtbGlua1xuICAgICAgICAgICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIj5cbiAgICAgICAgPC9jdWktc2lkZWJhci1uYXYtbGluaz5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHt9XG59XG4iXX0=