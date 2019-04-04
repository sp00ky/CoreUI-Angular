/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(router, renderer, hostElement) {
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
    SidebarNavComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.navItemsArray = JSON.parse(JSON.stringify(this.navItems || []));
    };
    SidebarNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-sidebar-nav',
                    template: "<cui-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</cui-sidebar-nav-items>\n"
                }] }
    ];
    /** @nocollapse */
    SidebarNavComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SidebarNavComponent.propDecorators = {
        navItems: [{ type: Input }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return SidebarNavComponent;
}());
export { SidebarNavComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDO0lBV0UsNkJBQ1MsTUFBYyxFQUNiLFFBQW1CLEVBQ25CLFdBQXVCO1FBRnhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDYixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBUFAsU0FBSSxHQUFHLEtBQUssQ0FBQztRQVNyQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFTSx5Q0FBVzs7OztJQUFsQixVQUFtQixPQUFzQjtRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw2R0FBMkM7aUJBQzVDOzs7O2dCQUxRLE1BQU07Z0JBRGdELFNBQVM7Z0JBQXBELFVBQVU7OzsyQkFRM0IsS0FBSzt1QkFFTCxXQUFXLFNBQUMsV0FBVzs7SUFlMUIsMEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWxCWSxtQkFBbUI7OztJQUM5Qix1Q0FBOEI7O0lBRTlCLG1DQUF1Qzs7SUFFdkMsNENBQWlDOztJQUcvQixxQ0FBcUI7Ozs7O0lBQ3JCLHVDQUEyQjs7Ozs7SUFDM0IsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhci1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuYXZJdGVtczogQXJyYXk8YW55PjtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnbmF2JztcblxuICBwdWJsaWMgbmF2SXRlbXNBcnJheTogQXJyYXk8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NpZGViYXItbmF2Jyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMubmF2SXRlbXNBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5uYXZJdGVtcyB8fCBbXSkpO1xuICB9XG59XG4iXX0=