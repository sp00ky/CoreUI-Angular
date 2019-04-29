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
export class SidebarComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?} classToggler
     * @param {?} sidebarService
     * @param {?} outClickService
     */
    constructor(document, renderer, hostElement, classToggler, sidebarService, outClickService) {
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
        renderer.addClass(hostElement.nativeElement, 'sidebar');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.body, 'sidebar-fixed');
        this.stateToggleSubscribe(false);
        this.outClickSubscribe(false);
    }
    /**
     * @param {?=} compact
     * @return {?}
     */
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.body, 'sidebar-compact');
        }
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.body, 'sidebar-fixed');
        }
    }
    /**
     * @param {?=} minimized
     * @return {?}
     */
    isMinimized(minimized = this.minimized) {
        this.sidebarService.toggle({ minimized: minimized });
    }
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.body, 'sidebar-off-canvas');
        }
    }
    /**
     * @param {?=} opened
     * @return {?}
     */
    isOpened(opened = this.opened) {
        this.sidebarService.toggle({ open: opened, breakpoint: this.display });
    }
    /**
     * @param {?=} display
     * @return {?}
     */
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            this.sidebarService.toggle({ open: true, breakpoint: display });
        }
    }
    /**
     * @return {?}
     */
    setState() {
        this.state.minimized = this.body.classList.contains('sidebar-minimized');
        this.state.opened = this.body.classList.contains(`sidebar-${this.display}-show`);
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    minimize(force) {
        /** @type {?} */
        const minimize = (typeof force === 'undefined') ? !this.body.classList.contains('sidebar-minimized') : force;
        minimize ? this.renderer.addClass(this.body, 'sidebar-minimized') : this.renderer.removeClass(this.body, 'sidebar-minimized');
        this.state.minimized = minimize;
        return minimize;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    open(state) {
        /** @type {?} */
        const toggle = (typeof state.open === 'undefined');
        /** @type {?} */
        const cssClass = Boolean(state.breakpoint) && checkBreakpoint(state.breakpoint, validBreakpoints) ?
            `sidebar-${state.breakpoint}-show` :
            sidebarCssClasses[0];
        /** @type {?} */
        const mobile = cssClass === sidebarCssClasses[0];
        /** @type {?} */
        const opened = this.body.classList.contains(cssClass);
        /** @type {?} */
        const open = toggle ? !opened : state.open;
        if (open) {
            this.renderer.addClass(this.body, cssClass);
        }
        else {
            this.renderer.removeClass(this.body, cssClass);
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
    }
    /**
     * @private
     * @param {?=} subscribe
     * @return {?}
     */
    stateToggleSubscribe(subscribe = true) {
        if (subscribe) {
            this.stateToggleSubscription = this.sidebarService.sidebarState$.subscribe((/**
             * @param {?} state
             * @return {?}
             */
            (state) => {
                if ('minimize' in state) {
                    this.minimize(state.minimize);
                }
                if ('open' in state) {
                    this.open(state);
                }
            }));
        }
        else {
            this.stateToggleSubscription.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?=} subscribe
     * @return {?}
     */
    outClickSubscribe(subscribe = true) {
        if (subscribe) {
            this.outClickSubscription = this.outClickService.outClick$.subscribe((/**
             * @param {?} message
             * @return {?}
             */
            message => {
                if (message.event) {
                    this.hideMobile(message.event);
                }
            }));
        }
        else {
            this.outClickSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    hideMobile(e) {
        if (this.state.opened) {
            if (!e.target.closest('[cuisidebartoggle]')) {
                this.sidebarService.toggle({ open: false, breakpoint: '' });
            }
        }
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
SidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ClassToggler },
    { type: SidebarService },
    { type: OutClickService }
];
SidebarComponent.propDecorators = {
    compact: [{ type: Input }],
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    minimized: [{ type: Input }],
    opened: [{ type: Input }],
    offCanvas: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXRELDJCQUlDOzs7SUFIQyxpQ0FBbUI7O0lBQ25CLDhCQUFnQjs7SUFDaEIsa0NBQW1COztBQU9yQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFrQjNCLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsWUFBMEIsRUFDMUIsY0FBOEIsRUFDOUIsZUFBZ0M7UUFMZCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVoxQyxVQUFLLEdBQWlCO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7UUFVQSxRQUFR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LHFDQUE0Qjs7SUFDNUIsa0NBQXlCOztJQUN6QixxQ0FBNEI7Ozs7O0lBRTVCLG1EQUE4Qzs7Ozs7SUFDOUMsZ0RBQTJDOzs7OztJQUMzQyxnQ0FBOEI7O0lBRTlCLGlDQUlFOzs7OztJQUdBLG9DQUF1Qzs7Ozs7SUFDdkMsb0NBQTJCOzs7OztJQUMzQix1Q0FBK0I7Ozs7O0lBQy9CLHdDQUFrQzs7Ozs7SUFDbEMsMENBQXNDOzs7OztJQUN0QywyQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIE9uSW5pdCwgT25EZXN0cm95LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBzaWRlYmFyQ3NzQ2xhc3NlcywgdmFsaWRCcmVha3BvaW50cywgY2hlY2tCcmVha3BvaW50IH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IENsYXNzVG9nZ2xlciB9IGZyb20gJy4uL3NoYXJlZC90b2dnbGUtY2xhc3Nlcyc7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IE91dENsaWNrU2VydmljZSB9IGZyb20gJy4vb3V0LWNsaWNrLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgU2lkZWJhclN0YXRlIHtcbiAgbWluaW1pemVkOiBib29sZWFuO1xuICBvcGVuZWQ6IGJvb2xlYW47XG4gIGJyZWFrcG9pbnQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VpLXNpZGViYXInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbmltaXplZDogYm9vbGVhbjtcbiAgQElucHV0KCkgb3BlbmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBvZmZDYW52YXM6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBzdGF0ZVRvZ2dsZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG91dENsaWNrU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYm9keTogSFRNTEJvZHlFbGVtZW50O1xuXG4gIHN0YXRlOiBTaWRlYmFyU3RhdGUgPSB7XG4gICAgbWluaW1pemVkOiB1bmRlZmluZWQsXG4gICAgb3BlbmVkOiB1bmRlZmluZWQsXG4gICAgYnJlYWtwb2ludDogdW5kZWZpbmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2xhc3NUb2dnbGVyOiBDbGFzc1RvZ2dsZXIsXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvdXRDbGlja1NlcnZpY2U6IE91dENsaWNrU2VydmljZVxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2lkZWJhcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xuICAgIHRoaXMuaXNDb21wYWN0KHRoaXMuY29tcGFjdCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgIHRoaXMuaXNNaW5pbWl6ZWQodGhpcy5taW5pbWl6ZWQpO1xuICAgIHRoaXMuaXNPZmZDYW52YXModGhpcy5vZmZDYW52YXMpO1xuICAgIHRoaXMuaXNPcGVuZWQodGhpcy5vcGVuZWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIHRoaXMuc3RhdGVUb2dnbGVTdWJzY3JpYmUoKTtcbiAgICB0aGlzLm91dENsaWNrU3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuYm9keSwgJ3NpZGViYXItZml4ZWQnICk7XG5cbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKGZhbHNlKTtcbiAgICB0aGlzLm91dENsaWNrU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuID0gdGhpcy5jb21wYWN0KTogdm9pZCB7XG4gICAgaWYgKGNvbXBhY3QpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ib2R5LCAnc2lkZWJhci1jb21wYWN0JyApO1xuICAgIH1cbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYm9keSwgJ3NpZGViYXItZml4ZWQnKTtcbiAgICB9XG4gIH1cblxuICBpc01pbmltaXplZChtaW5pbWl6ZWQ6IGJvb2xlYW4gPSB0aGlzLm1pbmltaXplZCk6IHZvaWQge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgbWluaW1pemVkOiBtaW5pbWl6ZWR9KTtcbiAgfVxuXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbiA9IHRoaXMub2ZmQ2FudmFzKTogdm9pZCB7XG4gICAgaWYgKG9mZkNhbnZhcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJvZHksICdzaWRlYmFyLW9mZi1jYW52YXMnKTtcbiAgICB9XG4gIH1cblxuICBpc09wZW5lZChvcGVuZWQ6IGJvb2xlYW4gPSB0aGlzLm9wZW5lZCk6IHZvaWQge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHtvcGVuOiBvcGVuZWQsIGJyZWFrcG9pbnQ6IHRoaXMuZGlzcGxheX0pO1xuICB9XG5cbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55ID0gdGhpcy5kaXNwbGF5KTogdm9pZCB7XG4gICAgaWYgKGRpc3BsYXkgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7b3BlbjogdHJ1ZSwgYnJlYWtwb2ludDogZGlzcGxheX0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIHRoaXMuc3RhdGUubWluaW1pemVkID0gdGhpcy5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1taW5pbWl6ZWQnKTtcbiAgICB0aGlzLnN0YXRlLm9wZW5lZCA9IHRoaXMuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoIGBzaWRlYmFyLSR7dGhpcy5kaXNwbGF5fS1zaG93YCApO1xuICB9XG5cbiAgbWluaW1pemUoZm9yY2U/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbWluaW1pemUgPSAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJykgPyAhdGhpcy5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1taW5pbWl6ZWQnKSA6IGZvcmNlO1xuICAgIG1pbmltaXplID8gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpIDogdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpO1xuICAgIHRoaXMuc3RhdGUubWluaW1pemVkID0gbWluaW1pemU7XG4gICAgcmV0dXJuIG1pbmltaXplO1xuICB9XG5cbiAgb3BlbihzdGF0ZTogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgdG9nZ2xlID0gKHR5cGVvZiBzdGF0ZS5vcGVuID09PSAndW5kZWZpbmVkJyk7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBCb29sZWFuKHN0YXRlLmJyZWFrcG9pbnQpICYmIGNoZWNrQnJlYWtwb2ludChzdGF0ZS5icmVha3BvaW50LCB2YWxpZEJyZWFrcG9pbnRzKSA/XG4gICAgICAgIGBzaWRlYmFyLSR7c3RhdGUuYnJlYWtwb2ludH0tc2hvd2AgOlxuICAgICAgICBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcbiAgICBjb25zdCBtb2JpbGUgPSBjc3NDbGFzcyA9PT0gc2lkZWJhckNzc0NsYXNzZXNbMF07XG4gICAgY29uc3Qgb3BlbmVkID0gdGhpcy5ib2R5LmNsYXNzTGlzdC5jb250YWlucyggY3NzQ2xhc3MgKTtcbiAgICBjb25zdCBvcGVuID0gdG9nZ2xlID8gIW9wZW5lZCA6IHN0YXRlLm9wZW47XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ib2R5LCBjc3NDbGFzcyApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuYm9keSwgY3NzQ2xhc3MgKTtcbiAgICB9XG4gICAgaWYgKG1vYmlsZSkge1xuICAgICAgaWYgKG9wZW4gJiYgKCF0aGlzLm91dENsaWNrU3Vic2NyaXB0aW9uIHx8IHRoaXMub3V0Q2xpY2tTdWJzY3JpcHRpb24uY2xvc2VkKSkge1xuICAgICAgICB0aGlzLm91dENsaWNrU3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIW9wZW4gJiYgdGhpcy5vdXRDbGlja1N1YnNjcmlwdGlvbiAmJiAhdGhpcy5vdXRDbGlja1N1YnNjcmlwdGlvbi5jbG9zZWQpIHtcbiAgICAgICAgdGhpcy5vdXRDbGlja1N1YnNjcmliZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUub3BlbmVkID0gPGJvb2xlYW4+b3BlbjtcbiAgICByZXR1cm4gPGJvb2xlYW4+b3BlbjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGVUb2dnbGVTdWJzY3JpYmUoc3Vic2NyaWJlOiBCb29sZWFuID0gdHJ1ZSkge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMuc3RhdGVUb2dnbGVTdWJzY3JpcHRpb24gPSB0aGlzLnNpZGViYXJTZXJ2aWNlLnNpZGViYXJTdGF0ZSQuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgICBpZiAoJ21pbmltaXplJyBpbiBzdGF0ZSkge1xuICAgICAgICAgIHRoaXMubWluaW1pemUoc3RhdGUubWluaW1pemUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnb3BlbicgaW4gc3RhdGUpIHtcbiAgICAgICAgICB0aGlzLm9wZW4oc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZVRvZ2dsZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3V0Q2xpY2tTdWJzY3JpYmUoc3Vic2NyaWJlOiBCb29sZWFuID0gdHJ1ZSkge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMub3V0Q2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLm91dENsaWNrU2VydmljZS5vdXRDbGljayQuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZS5ldmVudCkge1xuICAgICAgICAgIHRoaXMuaGlkZU1vYmlsZShtZXNzYWdlLmV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0Q2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZShlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJ1tjdWlzaWRlYmFydG9nZ2xlXScpKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHtvcGVuOiBmYWxzZSwgYnJlYWtwb2ludDogJyd9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==