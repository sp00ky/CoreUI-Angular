/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
var TogglerComponent = /** @class */ (function () {
    function TogglerComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasContent = true;
    }
    /**
     * @return {?}
     */
    TogglerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.hasContent = (/** @type {?} */ (this.content.nativeElement.childNodes.length));
        this.changeDetector.detectChanges();
    };
    TogglerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-toggler',
                    template: "<div #content *ngIf = \"hasContent\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf] = \"!hasContent\">\n  <button class=\"c-header-toggler\" type=\"button\">\n    <span class=\"c-header-toggler-icon\"></span>\n  </button>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    TogglerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TogglerComponent.propDecorators = {
        content: [{ type: ViewChild, args: ['content',] }]
    };
    return TogglerComponent;
}());
export { TogglerComponent };
if (false) {
    /** @type {?} */
    TogglerComponent.prototype.content;
    /** @type {?} */
    TogglerComponent.prototype.hasContent;
    /**
     * @type {?}
     * @private
     */
    TogglerComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvdG9nZ2xlci90b2dnbGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRztJQVVFLDBCQUFvQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFGckQsZUFBVSxHQUFHLElBQUksQ0FBQztJQUV1QyxDQUFDOzs7O0lBRTFELDBDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qix1UUFBdUM7aUJBQ3hDOzs7O2dCQUx5RCxpQkFBaUI7OzswQkFReEUsU0FBUyxTQUFDLFNBQVM7O0lBVXRCLHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FaWSxnQkFBZ0I7OztJQUUzQixtQ0FBMEM7O0lBRTFDLHNDQUFrQjs7Ozs7SUFFTiwwQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VpLXRvZ2dsZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIGhhc0NvbnRlbnQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5oYXNDb250ZW50ID0gPGJvb2xlYW4+dGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==