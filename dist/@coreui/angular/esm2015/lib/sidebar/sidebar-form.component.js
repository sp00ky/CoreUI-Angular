/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2 } from '@angular/core';
export class SidebarFormComponent {
    /**
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar-form');
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SidebarFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-form',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
SidebarFormComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidebarFormComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SidebarFormComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL3NpZGViYXItZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU12RSxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUUvQixZQUNVLFFBQW1CLEVBQ25CLFdBQXVCO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFFL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFDRCxRQUFRLEtBQUssQ0FBQzs7O1lBWmYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7WUFMc0MsU0FBUztZQUE3QixVQUFVOzs7Ozs7O0lBU3pCLHdDQUEyQjs7Ozs7SUFDM0IsMkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VpLXNpZGViYXItZm9ybScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLWZvcm0nKTtcbiAgfVxuICBuZ09uSW5pdCgpIHsgfVxufVxuIl19