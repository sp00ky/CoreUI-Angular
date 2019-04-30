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
        renderer.addClass(hostElement.nativeElement, 'c-sidebar');
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
        this.renderer.removeClass(this.hostElement.nativeElement, 'c-sidebar-fixed');
        this.stateToggleSubscribe(false);
        this.outClickSubscribe(false);
    }
    /**
     * @param {?=} compact
     * @return {?}
     */
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-compact');
        }
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-fixed');
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
            this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-off-canvas');
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
        this.state.minimized = this.hostElement.nativeElement.classList.contains('c-sidebar-minimized');
        this.state.opened = this.hostElement.nativeElement.classList.contains(`c-sidebar-${this.display}-show`);
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    minimize(force) {
        /** @type {?} */
        const minimize = (typeof force === 'undefined') ? !this.hostElement.nativeElement.classList.contains('c-sidebar-minimized') : force;
        minimize ? this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-minimized') :
            this.renderer.removeClass(this.hostElement.nativeElement, 'c-sidebar-minimized');
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
            `c-sidebar-${state.breakpoint}-show` :
            sidebarCssClasses[0];
        /** @type {?} */
        const mobile = cssClass === sidebarCssClasses[0];
        /** @type {?} */
        const opened = this.hostElement.nativeElement.classList.contains(cssClass);
        /** @type {?} */
        const open = toggle ? !opened : state.open;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXRELDJCQUlDOzs7SUFIQyxpQ0FBbUI7O0lBQ25CLDhCQUFnQjs7SUFDaEIsa0NBQW1COztBQU9yQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFrQjNCLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsWUFBMEIsRUFDMUIsY0FBOEIsRUFDOUIsZUFBZ0M7UUFMZCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVoxQyxVQUFLLEdBQWlCO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7UUFVQSxRQUFR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ZCxlQUFlOzs7c0JBYXJCLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBTE4sbUNBQTBCOztJQUMxQixtQ0FBc0I7O0lBQ3RCLGlDQUF3Qjs7SUFDeEIscUNBQTRCOztJQUM1QixrQ0FBeUI7O0lBQ3pCLHFDQUE0Qjs7Ozs7SUFFNUIsbURBQThDOzs7OztJQUM5QyxnREFBMkM7Ozs7O0lBQzNDLGdDQUE4Qjs7SUFFOUIsaUNBSUU7Ozs7O0lBR0Esb0NBQXVDOzs7OztJQUN2QyxvQ0FBMkI7Ozs7O0lBQzNCLHVDQUErQjs7Ozs7SUFDL0Isd0NBQWtDOzs7OztJQUNsQywwQ0FBc0M7Ozs7O0lBQ3RDLDJDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzLCB2YWxpZEJyZWFrcG9pbnRzLCBjaGVja0JyZWFrcG9pbnQgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgQ2xhc3NUb2dnbGVyIH0gZnJvbSAnLi4vc2hhcmVkL3RvZ2dsZS1jbGFzc2VzJztcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9zaWRlYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3V0Q2xpY2tTZXJ2aWNlIH0gZnJvbSAnLi9vdXQtY2xpY2suc2VydmljZSc7XG5cbmludGVyZmFjZSBTaWRlYmFyU3RhdGUge1xuICBtaW5pbWl6ZWQ6IGJvb2xlYW47XG4gIG9wZW5lZDogYm9vbGVhbjtcbiAgYnJlYWtwb2ludDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29tcGFjdDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbWluaW1pemVkOiBib29sZWFuO1xuICBASW5wdXQoKSBvcGVuZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBwcml2YXRlIHN0YXRlVG9nZ2xlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb3V0Q2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBib2R5OiBIVE1MQm9keUVsZW1lbnQ7XG5cbiAgc3RhdGU6IFNpZGViYXJTdGF0ZSA9IHtcbiAgICBtaW5pbWl6ZWQ6IHVuZGVmaW5lZCxcbiAgICBvcGVuZWQ6IHVuZGVmaW5lZCxcbiAgICBicmVha3BvaW50OiB1bmRlZmluZWRcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjbGFzc1RvZ2dsZXI6IENsYXNzVG9nZ2xlcixcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBTaWRlYmFyU2VydmljZSxcbiAgICBwcml2YXRlIG91dENsaWNrU2VydmljZTogT3V0Q2xpY2tTZXJ2aWNlXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjLXNpZGViYXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5ib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcbiAgICB0aGlzLmlzQ29tcGFjdCh0aGlzLmNvbXBhY3QpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmlzTWluaW1pemVkKHRoaXMubWluaW1pemVkKTtcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcbiAgICB0aGlzLmlzT3BlbmVkKHRoaXMub3BlbmVkKTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vdXRDbGlja1N1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjLXNpZGViYXItZml4ZWQnICk7XG5cbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKGZhbHNlKTtcbiAgICB0aGlzLm91dENsaWNrU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuID0gdGhpcy5jb21wYWN0KTogdm9pZCB7XG4gICAgaWYgKGNvbXBhY3QpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYy1zaWRlYmFyLWNvbXBhY3QnICk7XG4gICAgfVxuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcbiAgICBpZiAoZml4ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYy1zaWRlYmFyLWZpeGVkJyk7XG4gICAgfVxuICB9XG5cbiAgaXNNaW5pbWl6ZWQobWluaW1pemVkOiBib29sZWFuID0gdGhpcy5taW5pbWl6ZWQpOiB2b2lkIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7IG1pbmltaXplZDogbWluaW1pemVkfSk7XG4gIH1cblxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4gPSB0aGlzLm9mZkNhbnZhcyk6IHZvaWQge1xuICAgIGlmIChvZmZDYW52YXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYy1zaWRlYmFyLW9mZi1jYW52YXMnKTtcbiAgICB9XG4gIH1cblxuICBpc09wZW5lZChvcGVuZWQ6IGJvb2xlYW4gPSB0aGlzLm9wZW5lZCk6IHZvaWQge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHtvcGVuOiBvcGVuZWQsIGJyZWFrcG9pbnQ6IHRoaXMuZGlzcGxheX0pO1xuICB9XG5cbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55ID0gdGhpcy5kaXNwbGF5KTogdm9pZCB7XG4gICAgaWYgKGRpc3BsYXkgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7b3BlbjogdHJ1ZSwgYnJlYWtwb2ludDogZGlzcGxheX0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIHRoaXMuc3RhdGUubWluaW1pemVkID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYy1zaWRlYmFyLW1pbmltaXplZCcpO1xuICAgIHRoaXMuc3RhdGUub3BlbmVkID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggYGMtc2lkZWJhci0ke3RoaXMuZGlzcGxheX0tc2hvd2AgKTtcbiAgfVxuXG4gIG1pbmltaXplKGZvcmNlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1pbmltaXplID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID8gIXRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Mtc2lkZWJhci1taW5pbWl6ZWQnKSA6IGZvcmNlO1xuICAgIG1pbmltaXplID8gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjLXNpZGViYXItbWluaW1pemVkJykgOlxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjLXNpZGViYXItbWluaW1pemVkJyk7XG4gICAgdGhpcy5zdGF0ZS5taW5pbWl6ZWQgPSBtaW5pbWl6ZTtcbiAgICByZXR1cm4gbWluaW1pemU7XG4gIH1cblxuICBvcGVuKHN0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCB0b2dnbGUgPSAodHlwZW9mIHN0YXRlLm9wZW4gPT09ICd1bmRlZmluZWQnKTtcbiAgICBjb25zdCBjc3NDbGFzcyA9IEJvb2xlYW4oc3RhdGUuYnJlYWtwb2ludCkgJiYgY2hlY2tCcmVha3BvaW50KHN0YXRlLmJyZWFrcG9pbnQsIHZhbGlkQnJlYWtwb2ludHMpID9cbiAgICAgICAgYGMtc2lkZWJhci0ke3N0YXRlLmJyZWFrcG9pbnR9LXNob3dgIDpcbiAgICAgICAgc2lkZWJhckNzc0NsYXNzZXNbMF07XG4gICAgY29uc3QgbW9iaWxlID0gY3NzQ2xhc3MgPT09IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgIGNvbnN0IG9wZW5lZCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNzc0NsYXNzICk7XG4gICAgY29uc3Qgb3BlbiA9IHRvZ2dsZSA/ICFvcGVuZWQgOiBzdGF0ZS5vcGVuO1xuICAgIGlmIChvcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzICk7XG4gICAgfVxuICAgIGlmIChtb2JpbGUpIHtcbiAgICAgIGlmIChvcGVuICYmICghdGhpcy5vdXRDbGlja1N1YnNjcmlwdGlvbiB8fCB0aGlzLm91dENsaWNrU3Vic2NyaXB0aW9uLmNsb3NlZCkpIHtcbiAgICAgICAgdGhpcy5vdXRDbGlja1N1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCFvcGVuICYmIHRoaXMub3V0Q2xpY2tTdWJzY3JpcHRpb24gJiYgIXRoaXMub3V0Q2xpY2tTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgIHRoaXMub3V0Q2xpY2tTdWJzY3JpYmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlLm9wZW5lZCA9IDxib29sZWFuPm9wZW47XG4gICAgcmV0dXJuIDxib29sZWFuPm9wZW47XG4gIH1cblxuICBwcml2YXRlIHN0YXRlVG9nZ2xlU3Vic2NyaWJlKHN1YnNjcmliZTogQm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaXB0aW9uID0gdGhpcy5zaWRlYmFyU2VydmljZS5zaWRlYmFyU3RhdGUkLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgaWYgKCdtaW5pbWl6ZScgaW4gc3RhdGUpIHtcbiAgICAgICAgICB0aGlzLm1pbmltaXplKHN0YXRlLm1pbmltaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ29wZW4nIGluIHN0YXRlKSB7XG4gICAgICAgICAgdGhpcy5vcGVuKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGVUb2dnbGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG91dENsaWNrU3Vic2NyaWJlKHN1YnNjcmliZTogQm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLm91dENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5vdXRDbGlja1NlcnZpY2Uub3V0Q2xpY2skLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLmhpZGVNb2JpbGUobWVzc2FnZS5ldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCdbY3Vpc2lkZWJhcnRvZ2dsZV0nKSkge1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7b3BlbjogZmFsc2UsIGJyZWFrcG9pbnQ6ICcnfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=