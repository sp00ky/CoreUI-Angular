/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
export class TogglerComponent {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasContent = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.hasContent = (/** @type {?} */ (this.content.nativeElement.childNodes.length));
        this.changeDetector.detectChanges();
    }
}
TogglerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-toggler',
                template: "<div #content *ngIf = \"hasContent\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf] = \"!hasContent\">\n  <button class=\"c-header-toggler\" type=\"button\">\n    <span class=\"c-header-toggler-icon\"></span>\n  </button>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
TogglerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TogglerComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['content',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvdG9nZ2xlci90b2dnbGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1uRyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBTTNCLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUZyRCxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBRXVDLENBQUM7Ozs7SUFFMUQsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix1UUFBdUM7YUFDeEM7Ozs7WUFMeUQsaUJBQWlCOzs7c0JBUXhFLFNBQVMsU0FBQyxTQUFTOzs7O0lBQXBCLG1DQUEwQzs7SUFFMUMsc0NBQWtCOzs7OztJQUVOLDBDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktdG9nZ2xlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2dnbGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmhhc0NvbnRlbnQgPSA8Ym9vbGVhbj50aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19