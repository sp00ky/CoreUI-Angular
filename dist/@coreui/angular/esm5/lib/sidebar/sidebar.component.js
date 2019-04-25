/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { sidebarCssClasses, validBreakpoints, checkBreakpoint } from '../shared';
import { ClassToggler } from '../shared/toggle-classes';
import { SidebarService } from './sidebar.service';
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
    function SidebarComponent(document, renderer, hostElement, classToggler, sidebarService) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.classToggler = classToggler;
        this.sidebarService = sidebarService;
        this.state = {
            minimized: undefined,
            opened: undefined,
            breakpoint: undefined
        };
        renderer.addClass(hostElement.nativeElement, 'sidebar');
    }
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.body = this.document.body;
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
        this.isOpened(this.opened);
        this.setState();
        this.subscription = this.sidebarService.sidebarState$.subscribe((/**
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
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.body, 'sidebar-fixed');
        this.subscription.unsubscribe();
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
            this.renderer.addClass(this.body, 'sidebar-compact');
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
            this.renderer.addClass(this.body, 'sidebar-fixed');
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
            this.renderer.addClass(this.body, 'sidebar-off-canvas');
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
            /** @type {?} */
            var cssClass = Boolean(display) && checkBreakpoint(display, validBreakpoints) ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
            this.renderer.addClass(this.body, cssClass);
        }
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.setState = /**
     * @return {?}
     */
    function () {
        this.state.minimized = this.body.classList.contains('sidebar-minimized');
        this.state.opened = this.body.classList.contains("sidebar-" + this.display + "-show");
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
        var minimize = (typeof force === 'undefined') ? !this.body.classList.contains('sidebar-minimized') : force;
        minimize ? this.renderer.addClass(this.body, 'sidebar-minimized') : this.renderer.removeClass(this.body, 'sidebar-minimized');
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
            "sidebar-" + state.breakpoint + "-show" :
            sidebarCssClasses[0];
        /** @type {?} */
        var opened = this.body.classList.contains(cssClass);
        /** @type {?} */
        var open = toggle ? !opened : state.open;
        if (open) {
            this.renderer.addClass(this.body, cssClass);
        }
        else {
            this.renderer.removeClass(this.body, cssClass);
        }
        this.state.opened = (/** @type {?} */ (open));
        return (/** @type {?} */ (open));
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
        { type: SidebarService }
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
    SidebarComponent.prototype.subscription;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbkQsMkJBSUM7OztJQUhDLGlDQUFtQjs7SUFDbkIsOEJBQWdCOztJQUNoQixrQ0FBbUI7O0FBR3JCO0lBcUJFLDBCQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ25CLFdBQXVCLEVBQ3ZCLFlBQTBCLEVBQzFCLGNBQThCO1FBSlosYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVh4QyxVQUFLLEdBQWlCO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7UUFTQSxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUFBLGlCQW1CQztRQWpCQyxJQUFJLENB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QUFnQjs7O0lBQzNCLG1DQUEwQjs7SUFDMUIsbUNBQXNCOztJQUN0QixpQ0FBd0I7O0lBQ3hCLHFDQUE0Qjs7SUFDNUIsa0NBQXlCOztJQUN6QixxQ0FBNEI7Ozs7O0lBRTVCLHdDQUFtQzs7Ozs7SUFDbkMsZ0NBQThCOztJQUU5QixpQ0FJRTs7Ozs7SUFHQSxvQ0FBdUM7Ozs7O0lBQ3ZDLG9DQUEyQjs7Ozs7SUFDM0IsdUNBQStCOzs7OztJQUMvQix3Q0FBa0M7Ozs7O0lBQ2xDLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzLCB2YWxpZEJyZWFrcG9pbnRzLCBjaGVja0JyZWFrcG9pbnQgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgQ2xhc3NUb2dnbGVyIH0gZnJvbSAnLi4vc2hhcmVkL3RvZ2dsZS1jbGFzc2VzJztcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9zaWRlYmFyLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgU2lkZWJhclN0YXRlIHtcbiAgbWluaW1pemVkOiBib29sZWFuO1xuICBvcGVuZWQ6IGJvb2xlYW47XG4gIGJyZWFrcG9pbnQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VpLXNpZGViYXInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb21wYWN0OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5OiBhbnk7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5pbWl6ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9wZW5lZDogYm9vbGVhbjtcbiAgQElucHV0KCkgb2ZmQ2FudmFzOiBib29sZWFuO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYm9keTogSFRNTEJvZHlFbGVtZW50O1xuXG4gIHN0YXRlOiBTaWRlYmFyU3RhdGUgPSB7XG4gICAgbWluaW1pemVkOiB1bmRlZmluZWQsXG4gICAgb3BlbmVkOiB1bmRlZmluZWQsXG4gICAgYnJlYWtwb2ludDogdW5kZWZpbmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2xhc3NUb2dnbGVyOiBDbGFzc1RvZ2dsZXIsXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NpZGViYXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5ib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcbiAgICB0aGlzLmlzQ29tcGFjdCh0aGlzLmNvbXBhY3QpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmlzTWluaW1pemVkKHRoaXMubWluaW1pemVkKTtcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcbiAgICB0aGlzLmlzT3BlbmVkKHRoaXMub3BlbmVkKTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc2lkZWJhclNlcnZpY2Uuc2lkZWJhclN0YXRlJC5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICBpZiAoJ21pbmltaXplJyBpbiBzdGF0ZSkge1xuICAgICAgICB0aGlzLm1pbmltaXplKHN0YXRlLm1pbmltaXplKTtcbiAgICAgIH1cbiAgICAgIGlmICgnb3BlbicgaW4gc3RhdGUpIHtcbiAgICAgICAgdGhpcy5vcGVuKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ib2R5LCAnc2lkZWJhci1maXhlZCcgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBpc0NvbXBhY3QoY29tcGFjdDogYm9vbGVhbiA9IHRoaXMuY29tcGFjdCk6IHZvaWQge1xuICAgIGlmIChjb21wYWN0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYm9keSwgJ3NpZGViYXItY29tcGFjdCcgKTtcbiAgICB9XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJvZHksICdzaWRlYmFyLWZpeGVkJyk7XG4gICAgfVxuICB9XG5cbiAgaXNNaW5pbWl6ZWQobWluaW1pemVkOiBib29sZWFuID0gdGhpcy5taW5pbWl6ZWQpOiB2b2lkIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7IG1pbmltaXplZDogbWluaW1pemVkfSk7XG4gIH1cblxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4gPSB0aGlzLm9mZkNhbnZhcyk6IHZvaWQge1xuICAgIGlmIChvZmZDYW52YXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ib2R5LCAnc2lkZWJhci1vZmYtY2FudmFzJyk7XG4gICAgfVxuICB9XG5cbiAgaXNPcGVuZWQob3BlbmVkOiBib29sZWFuID0gdGhpcy5vcGVuZWQpOiB2b2lkIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7b3Blbjogb3BlbmVkLCBicmVha3BvaW50OiB0aGlzLmRpc3BsYXl9KTtcbiAgfVxuXG4gIGRpc3BsYXlCcmVha3BvaW50KGRpc3BsYXk6IGFueSA9IHRoaXMuZGlzcGxheSk6IHZvaWQge1xuICAgIGlmIChkaXNwbGF5ICE9PSBmYWxzZSkge1xuICAgICAgY29uc3QgY3NzQ2xhc3MgPSBCb29sZWFuKGRpc3BsYXkpICYmIGNoZWNrQnJlYWtwb2ludChkaXNwbGF5LCB2YWxpZEJyZWFrcG9pbnRzKSA/IGBzaWRlYmFyLSR7ZGlzcGxheX0tc2hvd2AgOiBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ib2R5LCBjc3NDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5zdGF0ZS5taW5pbWl6ZWQgPSB0aGlzLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLW1pbmltaXplZCcpO1xuICAgIHRoaXMuc3RhdGUub3BlbmVkID0gdGhpcy5ib2R5LmNsYXNzTGlzdC5jb250YWlucyggYHNpZGViYXItJHt0aGlzLmRpc3BsYXl9LXNob3dgICk7XG4gIH1cblxuICBtaW5pbWl6ZShmb3JjZT86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBtaW5pbWl6ZSA9ICh0eXBlb2YgZm9yY2UgPT09ICd1bmRlZmluZWQnKSA/ICF0aGlzLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLW1pbmltaXplZCcpIDogZm9yY2U7XG4gICAgbWluaW1pemUgPyB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYm9keSwgJ3NpZGViYXItbWluaW1pemVkJykgOiB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XG4gICAgdGhpcy5zdGF0ZS5taW5pbWl6ZWQgPSBtaW5pbWl6ZTtcbiAgICByZXR1cm4gbWluaW1pemU7XG4gIH1cblxuICBvcGVuKHN0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCB0b2dnbGUgPSAodHlwZW9mIHN0YXRlLm9wZW4gPT09ICd1bmRlZmluZWQnKTtcbiAgICBjb25zdCBjc3NDbGFzcyA9IEJvb2xlYW4oc3RhdGUuYnJlYWtwb2ludCkgJiYgY2hlY2tCcmVha3BvaW50KHN0YXRlLmJyZWFrcG9pbnQsIHZhbGlkQnJlYWtwb2ludHMpID9cbiAgICAgICAgYHNpZGViYXItJHtzdGF0ZS5icmVha3BvaW50fS1zaG93YCA6XG4gICAgICAgIHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgIGNvbnN0IG9wZW5lZCA9IHRoaXMuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoIGNzc0NsYXNzICk7XG4gICAgY29uc3Qgb3BlbiA9IHRvZ2dsZSA/ICFvcGVuZWQgOiBzdGF0ZS5vcGVuO1xuICAgIGlmIChvcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYm9keSwgY3NzQ2xhc3MgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmJvZHksIGNzc0NsYXNzICk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUub3BlbmVkID0gPGJvb2xlYW4+b3BlbjtcbiAgICByZXR1cm4gPGJvb2xlYW4+b3BlbjtcbiAgfVxufVxuIl19