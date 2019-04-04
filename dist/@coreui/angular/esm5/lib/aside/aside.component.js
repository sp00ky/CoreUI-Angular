/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses } from '../shared';
var AsideComponent = /** @class */ (function () {
    function AsideComponent(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'aside-menu-fixed';
        renderer.addClass(hostElement.nativeElement, 'aside-menu');
    }
    /**
     * @return {?}
     */
    AsideComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    };
    /**
     * @return {?}
     */
    AsideComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    AsideComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    AsideComponent.prototype.isOffCanvas = /**
     * @param {?=} offCanvas
     * @return {?}
     */
    function (offCanvas) {
        if (offCanvas === void 0) { offCanvas = this.offCanvas; }
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    };
    /**
     * @param {?=} display
     * @return {?}
     */
    AsideComponent.prototype.displayBreakpoint = /**
     * @param {?=} display
     * @return {?}
     */
    function (display) {
        if (display === void 0) { display = this.display; }
        if (display !== false) {
            /** @type {?} */
            var cssClass = this.display ? "aside-menu-" + this.display + "-show" : asideMenuCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    };
    AsideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-aside',
                    template: "<aside class=\"aside-menu\">\n  <ng-content></ng-content>\n</aside>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AsideComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    AsideComponent.propDecorators = {
        display: [{ type: Input }],
        fixed: [{ type: Input }],
        offCanvas: [{ type: Input }]
    };
    return AsideComponent;
}());
export { AsideComponent };
if (false) {
    /** @type {?} */
    AsideComponent.prototype.display;
    /** @type {?} */
    AsideComponent.prototype.fixed;
    /** @type {?} */
    AsideComponent.prototype.offCanvas;
    /**
     * @type {?}
     * @private
     */
    AsideComponent.prototype.fixedClass;
    /**
     * @type {?}
     * @private
     */
    AsideComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AsideComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    AsideComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2FzaWRlL2FzaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFaEQ7SUFZRSx3QkFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixXQUF1QjtRQUZMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUxoQixlQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFPL0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsS0FBMkI7UUFBM0Isc0JBQUEsRUFBQSxRQUFpQixJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLFNBQW1DO1FBQW5DLDBCQUFBLEVBQUEsWUFBcUIsSUFBSSxDQUFDLFNBQVM7UUFDN0MsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwwQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBMkI7UUFBM0Isd0JBQUEsRUFBQSxVQUFlLElBQUksQ0FBQyxPQUFPO1FBQzNDLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRzs7Z0JBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxnQkFBYyxJQUFJLENBQUMsT0FBTyxVQUFPLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGlGQUFxQzs7aUJBRXRDOzs7O2dEQVNJLE1BQU0sU0FBQyxRQUFRO2dCQWxCNkMsU0FBUztnQkFBdkQsVUFBVTs7OzBCQVcxQixLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUF3Q1IscUJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTNDWSxjQUFjOzs7SUFDekIsaUNBQXNCOztJQUN0QiwrQkFBd0I7O0lBQ3hCLG1DQUE0Qjs7Ozs7SUFFNUIsb0NBQWlEOzs7OztJQUcvQyxrQ0FBdUM7Ozs7O0lBQ3ZDLGtDQUEyQjs7Ozs7SUFDM0IscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgYXNpZGVNZW51Q3NzQ2xhc3NlcyB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1aS1hc2lkZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc2lkZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FzaWRlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXNpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2xhc3MgPSAnYXNpZGUtbWVudS1maXhlZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhc2lkZS1tZW51Jyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5pc09mZkNhbnZhcyh0aGlzLm9mZkNhbnZhcyk7XG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgaXNPZmZDYW52YXMob2ZmQ2FudmFzOiBib29sZWFuID0gdGhpcy5vZmZDYW52YXMpOiB2b2lkIHtcbiAgICBpZiAob2ZmQ2FudmFzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ2FzaWRlLW1lbnUtb2ZmLWNhbnZhcycpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlCcmVha3BvaW50KGRpc3BsYXk6IGFueSA9IHRoaXMuZGlzcGxheSk6IHZvaWQge1xuICAgIGlmIChkaXNwbGF5ICE9PSBmYWxzZSApIHtcbiAgICAgIGNvbnN0IGNzc0NsYXNzID0gdGhpcy5kaXNwbGF5ID8gYGFzaWRlLW1lbnUtJHt0aGlzLmRpc3BsYXl9LXNob3dgIDogYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBjc3NDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=