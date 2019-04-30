/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';
import { SidebarService } from '../../sidebar/sidebar.service';
import { OutClickService } from '../../sidebar/out-click.service';
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
    function AsideToggleDirective(elementRef, classToggler) {
        this.elementRef = elementRef;
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
        var cssClass = this.bp ? "c-sidebar-" + this.bp + "-show" : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses, this.elementRef.nativeElement);
    };
    AsideToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cuiAsideMenuToggle]',
                    providers: [ClassToggler]
                },] }
    ];
    /** @nocollapse */
    AsideToggleDirective.ctorParameters = function () { return [
        { type: ElementRef },
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
    AsideToggleDirective.prototype.elementRef;
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
/**
 * Detects click outside the element
 */
var OutClickDirective = /** @class */ (function () {
    function OutClickDirective(elementRef, outClickService) {
        this.elementRef = elementRef;
        this.outClickService = outClickService;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    OutClickDirective.prototype.onDocumentClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var targetElement = (/** @type {?} */ ($event.target));
        // Check if the click was outside the element
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.outClickService.onClick({ event: $event });
        }
    };
    OutClickDirective.decorators = [
        { type: Directive, args: [{ selector: '[cuiOutClick]' },] }
    ];
    /** @nocollapse */
    OutClickDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: OutClickService }
    ]; };
    OutClickDirective.propDecorators = {
        onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return OutClickDirective;
}());
export { OutClickDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutClickDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    OutClickDirective.prototype.outClickService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFnQixZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBa0IsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFLbEU7SUFNRSxnQ0FDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7Ozs7SUFFSiwyQ0FBVTs7OztJQURWLFVBQ1csTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7O1lBQ2xCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVTtRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDMUI7Ozs7Z0JBVFEsY0FBYzs7OzZCQVdwQixLQUFLLFNBQUMsa0JBQWtCOzZCQUl4QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQU1uQyw2QkFB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LElBQUksYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzNFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOztnQkFoQkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs7OztnQkE5S3JCLFVBQVU7Z0JBTXBCLGVBQWU7OztrQ0FnTHJCLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFTNUMsd0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSxpQkFBaUI7Ozs7OztJQUcxQix1Q0FBOEI7Ozs7O0lBQzlCLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBhc2lkZU1lbnVDc3NDbGFzc2VzIH0gZnJvbSAnLi4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBDbGFzc1RvZ2dsZXIgfSBmcm9tICcuLi90b2dnbGUtY2xhc3Nlcyc7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NpZGViYXIvc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IE91dENsaWNrU2VydmljZSB9IGZyb20gJy4uLy4uL3NpZGViYXIvb3V0LWNsaWNrLnNlcnZpY2UnO1xuXG4vKipcbiogQWxsb3dzIHRoZSBzaWRlYmFyIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjdWlTaWRlYmFyVG9nZ2xlXScsXG4gIHByb3ZpZGVyczogW0NsYXNzVG9nZ2xlcl1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgnY3VpU2lkZWJhclRvZ2dsZScpIGJyZWFrcG9pbnQ6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7fVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBicCA9IHRoaXMuYnJlYWtwb2ludDtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7IG9wZW46IHVuZGVmaW5lZCwgYnJlYWtwb2ludDogYnAgfSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1aVNpZGViYXJNaW5pbWl6ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU1pbmltaXplKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyBtaW5pbWl6ZTogdW5kZWZpbmVkIH0pO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjdWlNb2JpbGVTaWRlYmFyVG9nZ2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IFNpZGViYXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoe29wZW46IHVuZGVmaW5lZCwgYnJlYWtwb2ludDogJyd9KTtcbiAgfVxufVxuXG4vKipcbiogQWxsb3dzIHRoZSBvZmYtY2FudmFzIHNpZGViYXIgdG8gYmUgY2xvc2VkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3VpU2lkZWJhckNsb3NlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZSgkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItb2ZmLWNhbnZhcycpKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykgP1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKSA6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ3NpZGViYXItc2hvdycpO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3VpQnJhbmRNaW5pbWl6ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5kTWluaW1pemVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2JyYW5kLW1pbmltaXplZCcpID9cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpIDpcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpO1xuICB9XG59XG5cblxuLyoqXG4qIEFsbG93cyB0aGUgYXNpZGUgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXG4qL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1aUFzaWRlTWVudVRvZ2dsZV0nLFxuICBwcm92aWRlcnM6IFtDbGFzc1RvZ2dsZXJdXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjdWlBc2lkZU1lbnVUb2dnbGUnKSBicmVha3BvaW50OiBzdHJpbmc7XG4gIHB1YmxpYyBicDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2xhc3NUb2dnbGVyOiBDbGFzc1RvZ2dsZXJcbiAgKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJwID0gdGhpcy5icmVha3BvaW50O1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNzc0NsYXNzID0gdGhpcy5icCA/IGBjLXNpZGViYXItJHt0aGlzLmJwfS1zaG93YCA6IGFzaWRlTWVudUNzc0NsYXNzZXNbMF07XG4gICAgICB0aGlzLmNsYXNzVG9nZ2xlci50b2dnbGVDbGFzc2VzKGNzc0NsYXNzLCBhc2lkZU1lbnVDc3NDbGFzc2VzLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1aUh0bWxBdHRyXSdcbn0pXG5leHBvcnQgY2xhc3MgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjdWlIdG1sQXR0cjoge1trZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBhdHRyaWJzID0gdGhpcy5jdWlIdG1sQXR0cjtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlicykge1xuICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScgJiYgdHlwZW9mKGF0dHJpYnNbYXR0cl0pID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ2NsYXNzJykge1xuICAgICAgICB0aGlzLmFkZENsYXNzKGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWIoYXR0ciwgYXR0cmlic1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXMpIHtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLCBzdHlsZXNbc3R5bGVdICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc2VzKSB7XG4gICAgY29uc3QgY2xhc3NBcnJheSA9IChBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKSk7XG4gICAgY2xhc3NBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQubGVuZ3RoID4gMCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50ICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEF0dHJpYihrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlICk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlY3RzIGNsaWNrIG91dHNpZGUgdGhlIGVsZW1lbnRcbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2N1aU91dENsaWNrXScgfSlcbmV4cG9ydCBjbGFzcyBPdXRDbGlja0RpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3V0Q2xpY2tTZXJ2aWNlOiBPdXRDbGlja1NlcnZpY2VcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRG9jdW1lbnRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBjbGljayB3YXMgb3V0c2lkZSB0aGUgZWxlbWVudFxuICAgIGlmICh0YXJnZXRFbGVtZW50ICYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSkge1xuICAgICAgdGhpcy5vdXRDbGlja1NlcnZpY2Uub25DbGljayh7ZXZlbnQ6ICRldmVudH0pO1xuICAgIH1cbiAgfVxufVxuIl19