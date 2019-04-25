/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';
import { SidebarService } from '../../sidebar/sidebar.service';
/**
 * Allows the sidebar to be toggled via click.
 */
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(sidebarService) {
        this.sidebarService = sidebarService;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var bp = this.breakpoint;
        this.sidebarService.toggle({ open: undefined, breakpoint: bp });
    };
    SidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cuiSidebarToggle]',
                    providers: [ClassToggler]
                },] }
    ];
    /** @nocollapse */
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: SidebarService }
    ]; };
    SidebarToggleDirective.propDecorators = {
        breakpoint: [{ type: Input, args: ['cuiSidebarToggle',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarToggleDirective;
}());
export { SidebarToggleDirective };
if (false) {
    /** @type {?} */
    SidebarToggleDirective.prototype.breakpoint;
    /**
     * @type {?}
     * @private
     */
    SidebarToggleDirective.prototype.sidebarService;
}
var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective(sidebarService) {
        this.sidebarService = sidebarService;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarMinimizeDirective.prototype.toggleMinimize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ minimize: undefined });
    };
    SidebarMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cuiSidebarMinimize]'
                },] }
    ];
    /** @nocollapse */
    SidebarMinimizeDirective.ctorParameters = function () { return [
        { type: SidebarService }
    ]; };
    SidebarMinimizeDirective.propDecorators = {
        toggleMinimize: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarMinimizeDirective;
}());
export { SidebarMinimizeDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidebarMinimizeDirective.prototype.sidebarService;
}
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective(sidebarService) {
        this.sidebarService = sidebarService;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    MobileSidebarToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ open: undefined, breakpoint: '' });
    };
    MobileSidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cuiMobileSidebarToggle]'
                },] }
    ];
    /** @nocollapse */
    MobileSidebarToggleDirective.ctorParameters = function () { return [
        { type: SidebarService }
    ]; };
    MobileSidebarToggleDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MobileSidebarToggleDirective;
}());
export { MobileSidebarToggleDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MobileSidebarToggleDirective.prototype.sidebarService;
}
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.toggle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var body = this.document.body;
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        }
    };
    SidebarOffCanvasCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cuiSidebarClose]'
                },] }
    ];
    /** @nocollapse */
    SidebarOffCanvasCloseDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    SidebarOffCanvasCloseDirective.propDecorators = {
        toggle: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarOffCanvasCloseDirective;
}());
export { SidebarOffCanvasCloseDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidebarOffCanvasCloseDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    SidebarOffCanvasCloseDirective.prototype.renderer;
}
var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    BrandMinimizeDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    };
    BrandMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cuiBrandMinimize]'
                },] }
    ];
    /** @nocollapse */
    BrandMinimizeDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    BrandMinimizeDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return BrandMinimizeDirective;
}());
export { BrandMinimizeDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BrandMinimizeDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    BrandMinimizeDirective.prototype.renderer;
}
/**
 * Allows the aside to be toggled via click.
 */
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective(classToggler) {
        this.classToggler = classToggler;
    }
    /**
     * @return {?}
     */
    AsideToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bp = this.breakpoint;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AsideToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var cssClass = this.bp ? "aside-menu-" + this.bp + "-show" : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
    };
    AsideToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cuiAsideMenuToggle]',
                    providers: [ClassToggler]
                },] }
    ];
    /** @nocollapse */
    AsideToggleDirective.ctorParameters = function () { return [
        { type: ClassToggler }
    ]; };
    AsideToggleDirective.propDecorators = {
        breakpoint: [{ type: Input, args: ['cuiAsideMenuToggle',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return AsideToggleDirective;
}());
export { AsideToggleDirective };
if (false) {
    /** @type {?} */
    AsideToggleDirective.prototype.breakpoint;
    /** @type {?} */
    AsideToggleDirective.prototype.bp;
    /**
     * @type {?}
     * @private
     */
    AsideToggleDirective.prototype.classToggler;
}
var HtmlAttributesDirective = /** @class */ (function () {
    function HtmlAttributesDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    HtmlAttributesDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var attribs = this.cuiHtmlAttr;
        for (var attr in attribs) {
            if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                this.setStyle(attribs[attr]);
            }
            else if (attr === 'class') {
                this.addClass(attribs[attr]);
            }
            else {
                this.setAttrib(attr, attribs[attr]);
            }
        }
    };
    /**
     * @private
     * @param {?} styles
     * @return {?}
     */
    HtmlAttributesDirective.prototype.setStyle = /**
     * @private
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        for (var style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    };
    /**
     * @private
     * @param {?} classes
     * @return {?}
     */
    HtmlAttributesDirective.prototype.addClass = /**
     * @private
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        var _this = this;
        /** @type {?} */
        var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element.length > 0; })).forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.renderer.addClass(_this.el.nativeElement, element);
        }));
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HtmlAttributesDirective.prototype.setAttrib = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.renderer.setAttribute(this.el.nativeElement, key, value);
    };
    HtmlAttributesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cuiHtmlAttr]'
                },] }
    ];
    /** @nocollapse */
    HtmlAttributesDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    HtmlAttributesDirective.propDecorators = {
        cuiHtmlAttr: [{ type: Input }]
    };
    return HtmlAttributesDirective;
}());
export { HtmlAttributesDirective };
if (false) {
    /** @type {?} */
    HtmlAttributesDirective.prototype.cuiHtmlAttr;
    /**
     * @type {?}
     * @private
     */
    HtmlAttributesDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    HtmlAttributesDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFLL0Q7SUFNRSxnQ0FDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7Ozs7SUFFSiwyQ0FBVTs7OztJQURWLFVBQ1csTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7O1lBQ2xCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVTtRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDMUI7Ozs7Z0JBUlEsY0FBYzs7OzZCQVVwQixLQUFLLFNBQUMsa0JBQWtCOzZCQUl4QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQU1uQyw2QkFBQztDQUFBLEFBZkQsSUFlQztTQVhZLHNCQUFzQjs7O0lBQ2pDLDRDQUE4Qzs7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QUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2hFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQzFELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLDJDQUFTOzs7Ozs7SUFBakIsVUFBa0IsR0FBRyxFQUFFLEtBQUs7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ2pFLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQS9IbUUsU0FBUztnQkFBMUQsVUFBVTs7OzhCQWlJMUIsS0FBSzs7SUFvQ1IsOEJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXJDWSx1QkFBdUI7OztJQUNsQyw4Q0FBK0M7Ozs7O0lBRzdDLDJDQUEyQjs7Ozs7SUFDM0IscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgYXNpZGVNZW51Q3NzQ2xhc3NlcyB9IGZyb20gJy4uL2NsYXNzZXMnO1xuaW1wb3J0IHsgQ2xhc3NUb2dnbGVyIH0gZnJvbSAnLi4vdG9nZ2xlLWNsYXNzZXMnO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaWRlYmFyL3NpZGViYXIuc2VydmljZSc7XG5cbi8qKlxuKiBBbGxvd3MgdGhlIHNpZGViYXIgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXG4qL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1aVNpZGViYXJUb2dnbGVdJyxcbiAgcHJvdmlkZXJzOiBbQ2xhc3NUb2dnbGVyXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIHtcbiAgQElucHV0KCdjdWlTaWRlYmFyVG9nZ2xlJykgYnJlYWtwb2ludDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBTaWRlYmFyU2VydmljZVxuICApIHt9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGJwID0gdGhpcy5icmVha3BvaW50O1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgb3BlbjogdW5kZWZpbmVkLCBicmVha3BvaW50OiBicCB9KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3VpU2lkZWJhck1pbmltaXplXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBTaWRlYmFyU2VydmljZVxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlTWluaW1pemUoJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7IG1pbmltaXplOiB1bmRlZmluZWQgfSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1aU1vYmlsZVNpZGViYXJUb2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2JpbGVTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7b3BlbjogdW5kZWZpbmVkLCBicmVha3BvaW50OiAnJ30pO1xuICB9XG59XG5cbi8qKlxuKiBBbGxvd3MgdGhlIG9mZi1jYW52YXMgc2lkZWJhciB0byBiZSBjbG9zZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjdWlTaWRlYmFyQ2xvc2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1vZmYtY2FudmFzJykpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSA/XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItc2hvdycpIDpcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93Jyk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjdWlCcmFuZE1pbmltaXplXSdcbn0pXG5leHBvcnQgY2xhc3MgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnYnJhbmQtbWluaW1pemVkJykgP1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJykgOlxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJyk7XG4gIH1cbn1cblxuXG4vKipcbiogQWxsb3dzIHRoZSBhc2lkZSB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3VpQXNpZGVNZW51VG9nZ2xlXScsXG4gIHByb3ZpZGVyczogW0NsYXNzVG9nZ2xlcl1cbn0pXG5leHBvcnQgY2xhc3MgQXNpZGVUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2N1aUFzaWRlTWVudVRvZ2dsZScpIGJyZWFrcG9pbnQ6IHN0cmluZztcbiAgcHVibGljIGJwO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsYXNzVG9nZ2xlcjogQ2xhc3NUb2dnbGVyKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJwID0gdGhpcy5icmVha3BvaW50O1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNzc0NsYXNzID0gdGhpcy5icCA/IGBhc2lkZS1tZW51LSR7dGhpcy5icH0tc2hvd2AgOiBhc2lkZU1lbnVDc3NDbGFzc2VzWzBdO1xuICAgIHRoaXMuY2xhc3NUb2dnbGVyLnRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIGFzaWRlTWVudUNzc0NsYXNzZXMpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjdWlIdG1sQXR0cl0nXG59KVxuZXhwb3J0IGNsYXNzIEh0bWxBdHRyaWJ1dGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY3VpSHRtbEF0dHI6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgYXR0cmlicyA9IHRoaXMuY3VpSHRtbEF0dHI7XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJpYnMpIHtcbiAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnICYmIHR5cGVvZihhdHRyaWJzW2F0dHJdKSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoYXR0cmlic1thdHRyXSk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdjbGFzcycpIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmliKGF0dHIsIGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGUoc3R5bGVzKSB7XG4gICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBzdHlsZSwgc3R5bGVzW3N0eWxlXSApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoY2xhc3Nlcykge1xuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSAoQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJykpO1xuICAgIGNsYXNzQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lmxlbmd0aCA+IDApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZWxlbWVudCApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBdHRyaWIoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwga2V5LCB2YWx1ZSApO1xuICB9XG59XG4iXX0=