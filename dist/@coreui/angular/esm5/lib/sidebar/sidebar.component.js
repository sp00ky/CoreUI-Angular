/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { sidebarCssClasses } from '../shared';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar');
    }
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
    };
    /**
     * @param {?=} compact
     * @return {?}
     */
    SidebarComponent.prototype.isCompact = /**
     * @param {?=} compact
     * @return {?}
     */
    function (compact) {
        if (compact === void 0) { compact = this.compact; }
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    SidebarComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    };
    /**
     * @param {?=} minimized
     * @return {?}
     */
    SidebarComponent.prototype.isMinimized = /**
     * @param {?=} minimized
     * @return {?}
     */
    function (minimized) {
        if (minimized === void 0) { minimized = this.minimized; }
        if (minimized) {
            this.renderer.addClass(this.document.body, 'sidebar-minimized');
        }
    };
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    SidebarComponent.prototype.isOffCanvas = /**
     * @param {?=} offCanvas
     * @return {?}
     */
    function (offCanvas) {
        if (offCanvas === void 0) { offCanvas = this.offCanvas; }
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    };
    /**
     * @param {?=} display
     * @return {?}
     */
    SidebarComponent.prototype.displayBreakpoint = /**
     * @param {?=} display
     * @return {?}
     */
    function (display) {
        if (display === void 0) { display = this.display; }
        if (display !== false) {
            /** @type {?} */
            var cssClass = display ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    };
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-sidebar',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    SidebarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SidebarComponent.propDecorators = {
        compact: [{ type: Input }],
        display: [{ type: Input }],
        fixed: [{ type: Input }],
        minimized: [{ type: Input }],
        offCanvas: [{ type: Input }]
    };
    return SidebarComponent;
}());
export { SidebarComponent };
if (false) {
    /** @type {?} */
    SidebarComponent.prototype.compact;
    /** @type {?} */
    SidebarComponent.prototype.display;
    /** @type {?} */
    SidebarComponent.prototype.fixed;
    /** @type {?} */
    SidebarComponent.prototype.minimized;
    /** @type {?} */
    SidebarComponent.prototype.offCanvas;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFOUM7SUFXRSwwQkFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixXQUF1QjtRQUZMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUUvQixRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLE9BQStCO1FBQS9CLHdCQUFBLEVBQUEsVUFBbUIsSUFBSSxDQUFDLE9BQU87UUFDdkMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBRSxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsS0FBMkI7UUFBM0Isc0JBQUEsRUFBQSxRQUFpQixJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksU0FBbUM7UUFBbkMsMEJBQUEsRUFBQSxZQUFxQixJQUFJLENBQUMsU0FBUztRQUM3QyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxTQUFtQztRQUFuQywwQkFBQSxFQUFBLFlBQXFCLElBQUksQ0FBQyxTQUFTO1FBQzdDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7Ozs7O0lBRUQsNENBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQTJCO1FBQTNCLHdCQUFBLEVBQUEsVUFBZSxJQUFJLENBQUMsT0FBTztRQUMzQyxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7O2dCQUNmLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQVcsT0FBTyxVQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dEQVNJLE1BQU0sU0FBQyxRQUFRO2dCQWpCaUMsU0FBUztnQkFBRSxVQUFVOzs7MEJBVXZFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFvRFIsdUJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQXpEWSxnQkFBZ0I7OztJQUMzQixtQ0FBMEI7O0lBQzFCLG1DQUFzQjs7SUFDdEIsaUNBQXdCOztJQUN4QixxQ0FBNEI7O0lBQzVCLHFDQUE0Qjs7Ozs7SUFHMUIsb0NBQXVDOzs7OztJQUN2QyxvQ0FBMkI7Ozs7O0lBQzNCLHVDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgSW5qZWN0LCBPbkluaXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgc2lkZWJhckNzc0NsYXNzZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29tcGFjdDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbWluaW1pemVkOiBib29sZWFuO1xuICBASW5wdXQoKSBvZmZDYW52YXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlCcmVha3BvaW50KHRoaXMuZGlzcGxheSk7XG4gICAgdGhpcy5pc0NvbXBhY3QodGhpcy5jb21wYWN0KTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5pc01pbmltaXplZCh0aGlzLm1pbmltaXplZCk7XG4gICAgdGhpcy5pc09mZkNhbnZhcyh0aGlzLm9mZkNhbnZhcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItZml4ZWQnICk7XG4gIH1cblxuICBpc0NvbXBhY3QoY29tcGFjdDogYm9vbGVhbiA9IHRoaXMuY29tcGFjdCk6IHZvaWQge1xuICAgIGlmIChjb21wYWN0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItY29tcGFjdCcgKTtcbiAgICB9XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLWZpeGVkJyk7XG4gICAgfVxuICB9XG5cbiAgaXNNaW5pbWl6ZWQobWluaW1pemVkOiBib29sZWFuID0gdGhpcy5taW5pbWl6ZWQpOiB2b2lkIHtcbiAgICBpZiAobWluaW1pemVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XG4gICAgfVxuICB9XG5cbiAgaXNPZmZDYW52YXMob2ZmQ2FudmFzOiBib29sZWFuID0gdGhpcy5vZmZDYW52YXMpOiB2b2lkIHtcbiAgICBpZiAob2ZmQ2FudmFzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItb2ZmLWNhbnZhcycpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlCcmVha3BvaW50KGRpc3BsYXk6IGFueSA9IHRoaXMuZGlzcGxheSk6IHZvaWQge1xuICAgIGlmIChkaXNwbGF5ICE9PSBmYWxzZSkge1xuICAgICAgY29uc3QgY3NzQ2xhc3MgPSBkaXNwbGF5ID8gYHNpZGViYXItJHtkaXNwbGF5fS1zaG93YCA6IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIGNzc0NsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==