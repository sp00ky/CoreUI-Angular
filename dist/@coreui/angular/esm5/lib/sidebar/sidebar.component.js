/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { sidebarCssClasses, validBreakpoints, checkBreakpoint } from '../shared';
import { ClassToggler } from '../shared/toggle-classes';
import { SidebarService } from './sidebar.service';
import { OutClickService } from './out-click.service';
/**
 * @record
 */
function SidebarState() { }
if (false) {
    /** @type {?} */
    SidebarState.prototype.minimized;
    /** @type {?} */
    SidebarState.prototype.opened;
    /** @type {?} */
    SidebarState.prototype.breakpoint;
}
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(document, renderer, hostElement, classToggler, sidebarService, outClickService) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.classToggler = classToggler;
        this.sidebarService = sidebarService;
        this.outClickService = outClickService;
        this.state = {
            minimized: undefined,
            opened: undefined,
            breakpoint: undefined
        };
        renderer.addClass(hostElement.nativeElement, 'c-sidebar');
    }
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.body = this.document.body;
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
        this.isOpened(this.opened);
        this.setState();
        this.stateToggleSubscribe();
        this.outClickSubscribe();
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.hostElement.nativeElement, 'c-sidebar-fixed');
        this.stateToggleSubscribe(false);
        this.outClickSubscribe(false);
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
            this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-compact');
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
            this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-fixed');
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
        this.sidebarService.toggle({ minimized: minimized });
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
            this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-off-canvas');
        }
    };
    /**
     * @param {?=} opened
     * @return {?}
     */
    SidebarComponent.prototype.isOpened = /**
     * @param {?=} opened
     * @return {?}
     */
    function (opened) {
        if (opened === void 0) { opened = this.opened; }
        this.sidebarService.toggle({ open: opened, breakpoint: this.display });
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
            this.sidebarService.toggle({ open: true, breakpoint: display });
        }
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.setState = /**
     * @return {?}
     */
    function () {
        this.state.minimized = this.hostElement.nativeElement.classList.contains('c-sidebar-minimized');
        this.state.opened = this.hostElement.nativeElement.classList.contains("c-sidebar-" + this.display + "-show");
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    SidebarComponent.prototype.minimize = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        /** @type {?} */
        var minimize = (typeof force === 'undefined') ? !this.hostElement.nativeElement.classList.contains('c-sidebar-minimized') : force;
        minimize ? this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-minimized') :
            this.renderer.removeClass(this.hostElement.nativeElement, 'c-sidebar-minimized');
        this.state.minimized = minimize;
        return minimize;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    SidebarComponent.prototype.open = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var toggle = (typeof state.open === 'undefined');
        /** @type {?} */
        var cssClass = Boolean(state.breakpoint) && checkBreakpoint(state.breakpoint, validBreakpoints) ?
            "c-sidebar-" + state.breakpoint + "-show" :
            sidebarCssClasses[0];
        /** @type {?} */
        var mobile = cssClass === sidebarCssClasses[0];
        /** @type {?} */
        var opened = this.hostElement.nativeElement.classList.contains(cssClass);
        /** @type {?} */
        var open = toggle ? !opened : state.open;
        if (open) {
            this.renderer.addClass(this.hostElement.nativeElement, cssClass);
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, cssClass);
        }
        if (mobile) {
            if (open && (!this.outClickSubscription || this.outClickSubscription.closed)) {
                this.outClickSubscribe();
            }
            if (!open && this.outClickSubscription && !this.outClickSubscription.closed) {
                this.outClickSubscribe(false);
            }
        }
        this.state.opened = (/** @type {?} */ (open));
        return (/** @type {?} */ (open));
    };
    /**
     * @private
     * @param {?=} subscribe
     * @return {?}
     */
    SidebarComponent.prototype.stateToggleSubscribe = /**
     * @private
     * @param {?=} subscribe
     * @return {?}
     */
    function (subscribe) {
        var _this = this;
        if (subscribe === void 0) { subscribe = true; }
        if (subscribe) {
            this.stateToggleSubscription = this.sidebarService.sidebarState$.subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                if ('minimize' in state) {
                    _this.minimize(state.minimize);
                }
                if ('open' in state) {
                    _this.open(state);
                }
            }));
        }
        else {
            this.stateToggleSubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?=} subscribe
     * @return {?}
     */
    SidebarComponent.prototype.outClickSubscribe = /**
     * @private
     * @param {?=} subscribe
     * @return {?}
     */
    function (subscribe) {
        var _this = this;
        if (subscribe === void 0) { subscribe = true; }
        if (subscribe) {
            this.outClickSubscription = this.outClickService.outClick$.subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
                if (message.event) {
                    _this.hideMobile(message.event);
                }
            }));
        }
        else {
            this.outClickSubscription.unsubscribe();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SidebarComponent.prototype.hideMobile = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.state.opened) {
            if (!e.target.closest('[cuisidebartoggle]')) {
                this.sidebarService.toggle({ open: false, breakpoint: '' });
            }
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
        { type: ElementRef },
        { type: ClassToggler },
        { type: SidebarService },
        { type: OutClickService }
    ]; };
    SidebarComponent.propDecorators = {
        compact: [{ type: Input }],
        display: [{ type: Input }],
        fixed: [{ type: Input }],
        minimized: [{ type: Input }],
        opened: [{ type: Input }],
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
    SidebarComponent.prototype.opened;
    /** @type {?} */
    SidebarComponent.prototype.offCanvas;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.stateToggleSubscription;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.outClickSubscription;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.body;
    /** @type {?} */
    SidebarComponent.prototype.state;
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
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.classToggler;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.sidebarService;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.outClickService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXRELDJCQUlDOzs7SUFIQyxpQ0FBbUI7O0lBQ25CLDhCQUFnQjs7SUFDaEIsa0NBQW1COztBQUdyQjtJQXNCRSwwQkFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixXQUF1QixFQUN2QixZQUEwQixFQUMxQixjQUE4QixFQUM5QixlQUFnQztRQUxkLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBWjFDLFVBQUssR0FBaUI7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsVUFBVSxFQUFFLFNBQVM7U0FDdEIsQ0FBQztRQVVBLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFD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TUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7YUFDM0Q7U0FDRjtJQUNILENBQUM7O2dCQTlKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dEQW9CSSxNQUFNLFNBQUMsUUFBUTtnQkF0Q2tDLFNBQVM7Z0JBQUUsVUFBVTtnQkFLbEUsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGVBQWU7OzswQkFhckIsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBcUpSLHVCQUFDO0NBQUEsQUEvSkQsSUErSkM7U0EzSlksZ0JBQWdCOzs7SUFDM0IsbUNBQTBCOztJQUMxQixtQ0FBc0I7O0lBQ3RCLGlDQUF3Qjs7SUFDeEIscUNBQTRCOztJQUM1QixrQ0FBeUI7O0lBQ3pCLHFDQUE0Qjs7Ozs7SUFFNUIsbURBQThDOzs7OztJQUM5QyxnREFBMkM7Ozs7O0lBQzNDLGdDQUE4Qjs7SUFFOUIsaUNBSUU7Ozs7O0lBR0Esb0NBQXVDOzs7OztJQUN2QyxvQ0FBMkI7Ozs7O0lBQzNCLHVDQUErQjs7Ozs7SUFDL0Isd0NBQWtDOzs7OztJQUNsQywwQ0FBc0M7Ozs7O0lBQ3RDLDJDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzLCB2YWxpZEJyZWFrcG9pbnRzLCBjaGVja0JyZWFrcG9pbnQgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgQ2xhc3NUb2dnbGVyIH0gZnJvbSAnLi4vc2hhcmVkL3RvZ2dsZS1jbGFzc2VzJztcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9zaWRlYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3V0Q2xpY2tTZXJ2aWNlIH0gZnJvbSAnLi9vdXQtY2xpY2suc2VydmljZSc7XG5cbmludGVyZmFjZSBTaWRlYmFyU3RhdGUge1xuICBtaW5pbWl6ZWQ6IGJvb2xlYW47XG4gIG9wZW5lZDogYm9vbGVhbjtcbiAgYnJlYWtwb2ludDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29tcGFjdDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbWluaW1pemVkOiBib29sZWFuO1xuICBASW5wdXQoKSBvcGVuZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBwcml2YXRlIHN0YXRlVG9nZ2xlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb3V0Q2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBib2R5OiBIVE1MQm9keUVsZW1lbnQ7XG5cbiAgc3RhdGU6IFNpZGViYXJTdGF0ZSA9IHtcbiAgICBtaW5pbWl6ZWQ6IHVuZGVmaW5lZCxcbiAgICBvcGVuZWQ6IHVuZGVmaW5lZCxcbiAgICBicmVha3BvaW50OiB1bmRlZmluZWRcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjbGFzc1RvZ2dsZXI6IENsYXNzVG9nZ2xlcixcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBTaWRlYmFyU2VydmljZSxcbiAgICBwcml2YXRlIG91dENsaWNrU2VydmljZTogT3V0Q2xpY2tTZXJ2aWNlXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjLXNpZGViYXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5ib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcbiAgICB0aGlzLmlzQ29tcGFjdCh0aGlzLmNvbXBhY3QpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmlzTWluaW1pemVkKHRoaXMubWluaW1pemVkKTtcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcbiAgICB0aGlzLmlzT3BlbmVkKHRoaXMub3BlbmVkKTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vdXRDbGlja1N1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjLXNpZGViYXItZml4ZWQnICk7XG5cbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKGZhbHNlKTtcbiAgICB0aGlzLm91dENsaWNrU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuID0gdGhpcy5jb21wYWN0KTogdm9pZCB7XG4gICAgaWYgKGNvbXBhY3QpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYy1zaWRlYmFyLWNvbXBhY3QnICk7XG4gICAgfVxuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcbiAgICBpZiAoZml4ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYy1zaWRlYmFyLWZpeGVkJyk7XG4gICAgfVxuICB9XG5cbiAgaXNNaW5pbWl6ZWQobWluaW1pemVkOiBib29sZWFuID0gdGhpcy5taW5pbWl6ZWQpOiB2b2lkIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7IG1pbmltaXplZDogbWluaW1pemVkfSk7XG4gIH1cblxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4gPSB0aGlzLm9mZkNhbnZhcyk6IHZvaWQge1xuICAgIGlmIChvZmZDYW52YXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYy1zaWRlYmFyLW9mZi1jYW52YXMnKTtcbiAgICB9XG4gIH1cblxuICBpc09wZW5lZChvcGVuZWQ6IGJvb2xlYW4gPSB0aGlzLm9wZW5lZCk6IHZvaWQge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHtvcGVuOiBvcGVuZWQsIGJyZWFrcG9pbnQ6IHRoaXMuZGlzcGxheX0pO1xuICB9XG5cbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55ID0gdGhpcy5kaXNwbGF5KTogdm9pZCB7XG4gICAgaWYgKGRpc3BsYXkgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7b3BlbjogdHJ1ZSwgYnJlYWtwb2ludDogZGlzcGxheX0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIHRoaXMuc3RhdGUubWluaW1pemVkID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYy1zaWRlYmFyLW1pbmltaXplZCcpO1xuICAgIHRoaXMuc3RhdGUub3BlbmVkID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggYGMtc2lkZWJhci0ke3RoaXMuZGlzcGxheX0tc2hvd2AgKTtcbiAgfVxuXG4gIG1pbmltaXplKGZvcmNlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1pbmltaXplID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID8gIXRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Mtc2lkZWJhci1taW5pbWl6ZWQnKSA6IGZvcmNlO1xuICAgIG1pbmltaXplID8gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjLXNpZGViYXItbWluaW1pemVkJykgOlxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjLXNpZGViYXItbWluaW1pemVkJyk7XG4gICAgdGhpcy5zdGF0ZS5taW5pbWl6ZWQgPSBtaW5pbWl6ZTtcbiAgICByZXR1cm4gbWluaW1pemU7XG4gIH1cblxuICBvcGVuKHN0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCB0b2dnbGUgPSAodHlwZW9mIHN0YXRlLm9wZW4gPT09ICd1bmRlZmluZWQnKTtcbiAgICBjb25zdCBjc3NDbGFzcyA9IEJvb2xlYW4oc3RhdGUuYnJlYWtwb2ludCkgJiYgY2hlY2tCcmVha3BvaW50KHN0YXRlLmJyZWFrcG9pbnQsIHZhbGlkQnJlYWtwb2ludHMpID9cbiAgICAgICAgYGMtc2lkZWJhci0ke3N0YXRlLmJyZWFrcG9pbnR9LXNob3dgIDpcbiAgICAgICAgc2lkZWJhckNzc0NsYXNzZXNbMF07XG4gICAgY29uc3QgbW9iaWxlID0gY3NzQ2xhc3MgPT09IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgIGNvbnN0IG9wZW5lZCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNzc0NsYXNzICk7XG4gICAgY29uc3Qgb3BlbiA9IHRvZ2dsZSA/ICFvcGVuZWQgOiBzdGF0ZS5vcGVuO1xuICAgIGlmIChvcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzICk7XG4gICAgfVxuICAgIGlmIChtb2JpbGUpIHtcbiAgICAgIGlmIChvcGVuICYmICghdGhpcy5vdXRDbGlja1N1YnNjcmlwdGlvbiB8fCB0aGlzLm91dENsaWNrU3Vic2NyaXB0aW9uLmNsb3NlZCkpIHtcbiAgICAgICAgdGhpcy5vdXRDbGlja1N1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCFvcGVuICYmIHRoaXMub3V0Q2xpY2tTdWJzY3JpcHRpb24gJiYgIXRoaXMub3V0Q2xpY2tTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgIHRoaXMub3V0Q2xpY2tTdWJzY3JpYmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlLm9wZW5lZCA9IDxib29sZWFuPm9wZW47XG4gICAgcmV0dXJuIDxib29sZWFuPm9wZW47XG4gIH1cblxuICBwcml2YXRlIHN0YXRlVG9nZ2xlU3Vic2NyaWJlKHN1YnNjcmliZTogQm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaXB0aW9uID0gdGhpcy5zaWRlYmFyU2VydmljZS5zaWRlYmFyU3RhdGUkLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgaWYgKCdtaW5pbWl6ZScgaW4gc3RhdGUpIHtcbiAgICAgICAgICB0aGlzLm1pbmltaXplKHN0YXRlLm1pbmltaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ29wZW4nIGluIHN0YXRlKSB7XG4gICAgICAgICAgdGhpcy5vcGVuKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGVUb2dnbGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG91dENsaWNrU3Vic2NyaWJlKHN1YnNjcmliZTogQm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLm91dENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5vdXRDbGlja1NlcnZpY2Uub3V0Q2xpY2skLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLmhpZGVNb2JpbGUobWVzc2FnZS5ldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCdbY3Vpc2lkZWJhcnRvZ2dsZV0nKSkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7b3BlbjogZmFsc2UsIGJyZWFrcG9pbnQ6ICcnfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=