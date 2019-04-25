/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var SidebarService = /** @class */ (function () {
    function SidebarService() {
        this.sidebarState = new BehaviorSubject({});
        this.sidebarState$ = this.sidebarState.asObservable();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    SidebarService.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.sidebarState.next(state);
    };
    SidebarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SidebarService.ctorParameters = function () { return []; };
    /** @nocollapse */ SidebarService.ngInjectableDef = i0.defineInjectable({ factory: function SidebarService_Factory() { return new SidebarService(); }, token: SidebarService, providedIn: "root" });
    return SidebarService;
}());
export { SidebarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidebarService.prototype.sidebarState;
    /** @type {?} */
    SidebarService.prototype.sidebarState$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRXJDO0lBUUU7UUFIUSxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVsQyxDQUFDOzs7OztJQUVoQiwrQkFBTTs7OztJQUFOLFVBQU8sS0FBVTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUxEO0NBZ0JDLEFBYkQsSUFhQztTQVZZLGNBQWM7Ozs7OztJQUV6QixzQ0FBb0Q7O0lBQ3BELHVDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc2lkZWJhclN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTtcbiAgc2lkZWJhclN0YXRlJCA9IHRoaXMuc2lkZWJhclN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB0b2dnbGUoc3RhdGU6IGFueSkge1xuICAgIHRoaXMuc2lkZWJhclN0YXRlLm5leHQoc3RhdGUpO1xuICB9XG59XG4iXX0=