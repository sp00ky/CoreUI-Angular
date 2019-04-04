/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../sidebar-nav.service';
var SidebarNavDropdownComponent = /** @class */ (function () {
    function SidebarNavDropdownComponent(helper) {
        this.helper = helper;
    }
    SidebarNavDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-sidebar-nav-dropdown',
                    template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       cuiNavDropdownToggle\n       [cuiHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n    </a>\n    <cui-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </cui-sidebar-nav-items>\n  ",
                    providers: [SidebarNavHelper],
                    styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                        '.nav-dropdown-items { display: block; }']
                }] }
    ];
    /** @nocollapse */
    SidebarNavDropdownComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    SidebarNavDropdownComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return SidebarNavDropdownComponent;
}());
export { SidebarNavDropdownComponent };
if (false) {
    /** @type {?} */
    SidebarNavDropdownComponent.prototype.item;
    /** @type {?} */
    SidebarNavDropdownComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RDtJQXdCRSxxQ0FDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDOztnQkExQk4sU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxrZ0JBWVQ7b0JBS0QsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7NkJBSDdCLDJDQUEyQzt3QkFDM0MseUNBQXlDO2lCQUc1Qzs7OztnQkF0Qk8sZ0JBQWdCOzs7dUJBd0JyQixLQUFLOztJQUtSLGtDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FOWSwyQkFBMkI7OztJQUN0QywyQ0FBbUI7O0lBR2pCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vc2lkZWJhci1uYXYuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1aS1zaWRlYmFyLW5hdi1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgY2xhc3M9XCJuYXYtbGluayBuYXYtZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICBjdWlOYXZEcm9wZG93blRvZ2dsZVxuICAgICAgIFtjdWlIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cbiAgICAgIDxpICpuZ0lmPVwiaGVscGVyLmhhc0ljb24oaXRlbSlcIiBbbmdDbGFzc109XCJoZWxwZXIuZ2V0SWNvbkNsYXNzKGl0ZW0pXCI+PC9pPlxuICAgICAgPG5nLWNvbnRhaW5lcj57e2l0ZW0ubmFtZX19PC9uZy1jb250YWluZXI+XG4gICAgICA8c3BhbiAqbmdJZj1cImhlbHBlci5oYXNCYWRnZShpdGVtKVwiIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRCYWRnZUNsYXNzKGl0ZW0pXCI+e3sgaXRlbS5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvYT5cbiAgICA8Y3VpLXNpZGViYXItbmF2LWl0ZW1zXG4gICAgICBjbGFzcz1cIm5hdi1kcm9wZG93bi1pdGVtc1wiXG4gICAgICBbaXRlbXNdPVwiaXRlbS5jaGlsZHJlblwiPlxuICAgIDwvY3VpLXNpZGViYXItbmF2LWl0ZW1zPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICAnLm5hdi1kcm9wZG93bi10b2dnbGUgeyBjdXJzb3I6IHBvaW50ZXI7IH0nLFxuICAgICcubmF2LWRyb3Bkb3duLWl0ZW1zIHsgZGlzcGxheTogYmxvY2s7IH0nXG4gIF0sXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcbiAgKSB7IH1cbn1cbiJdfQ==