/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
export class SidebarNavComponent {
    /**
     * @param {?} router
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(router, renderer, hostElement) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.role = 'nav';
        renderer.addClass(hostElement.nativeElement, 'sidebar-nav');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.navItemsArray = JSON.parse(JSON.stringify(this.navItems || []));
    }
}
SidebarNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav',
                template: "<cui-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</cui-sidebar-nav-items>\n"
            }] }
];
/** @nocollapse */
SidebarNavComponent.ctorParameters = () => [
    { type: Router },
    { type: Renderer2 },
    { type: ElementRef }
];
SidebarNavComponent.propDecorators = {
    navItems: [{ type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /** @type {?} */
    SidebarNavComponent.prototype.navItems;
    /** @type {?} */
    SidebarNavComponent.prototype.role;
    /** @type {?} */
    SidebarNavComponent.prototype.navItemsArray;
    /** @type {?} */
    SidebarNavComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTXpDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQU85QixZQUNTLE1BQWMsRUFDYixRQUFtQixFQUNuQixXQUF1QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVBQLFNBQUksR0FBRyxLQUFLLENBQUM7UUFTckMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQXNCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDZHQUEyQzthQUM1Qzs7OztZQUxRLE1BQU07WUFEZ0QsU0FBUztZQUFwRCxVQUFVOzs7dUJBUTNCLEtBQUs7bUJBRUwsV0FBVyxTQUFDLFdBQVc7Ozs7SUFGeEIsdUNBQThCOztJQUU5QixtQ0FBdUM7O0lBRXZDLDRDQUFpQzs7SUFHL0IscUNBQXFCOzs7OztJQUNyQix1Q0FBMkI7Ozs7O0lBQzNCLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VpLXNpZGViYXItbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItbmF2LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbmF2SXRlbXM6IEFycmF5PGFueT47XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ25hdic7XG5cbiAgcHVibGljIG5hdkl0ZW1zQXJyYXk6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLW5hdicpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm5hdkl0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubmF2SXRlbXMgfHwgW10pKTtcbiAgfVxufVxuIl19