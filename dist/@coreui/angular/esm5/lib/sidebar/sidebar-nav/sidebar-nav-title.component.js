/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
var SidebarNavTitleComponent = /** @class */ (function () {
    function SidebarNavTitleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    SidebarNavTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nativeElement = this.el.nativeElement;
        /** @type {?} */
        var name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            /** @type {?} */
            var classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            /** @type {?} */
            var wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    };
    /**
     * @private
     * @param {?} attribs
     * @param {?} element
     * @return {?}
     */
    SidebarNavTitleComponent.prototype.addAttribs = /**
     * @private
     * @param {?} attribs
     * @param {?} element
     * @return {?}
     */
    function (attribs, element) {
        if (attribs) {
            for (var attr in attribs) {
                if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                    this.setStyle(attribs[attr], element);
                }
                else if (attr === 'class') {
                    this.addClass(attribs[attr], element);
                }
                else {
                    this.setAttrib(attr, attribs[attr], element);
                }
            }
        }
    };
    /**
     * @private
     * @param {?} styles
     * @param {?} el
     * @return {?}
     */
    SidebarNavTitleComponent.prototype.setStyle = /**
     * @private
     * @param {?} styles
     * @param {?} el
     * @return {?}
     */
    function (styles, el) {
        for (var style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    };
    /**
     * @private
     * @param {?} classes
     * @param {?} el
     * @return {?}
     */
    SidebarNavTitleComponent.prototype.addClass = /**
     * @private
     * @param {?} classes
     * @param {?} el
     * @return {?}
     */
    function (classes, el) {
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
            _this.renderer.addClass(el, element);
        }));
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?} el
     * @return {?}
     */
    SidebarNavTitleComponent.prototype.setAttrib = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?} el
     * @return {?}
     */
    function (key, value, el) {
        this.renderer.setAttribute(el, key, value);
    };
    SidebarNavTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-sidebar-nav-title',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    SidebarNavTitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SidebarNavTitleComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return SidebarNavTitleComponent;
}());
export { SidebarNavTitleComponent };
if (false) {
    /** @type {?} */
    SidebarNavTitleComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    SidebarNavTitleComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SidebarNavTitleComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTlFO0lBT0Usa0NBQ1UsRUFBYyxFQUNkLFFBQW1CO1FBRG5CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzFCLENBQUM7Ozs7SUFFSiwyQ0FBUTs7O0lBQVI7O1lBQ1EsYUFBYSxHQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O1lBQ2xELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyRCxJQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFHOztnQkFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUc7O2dCQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7Ozs7SUFFTyw2Q0FBVTs7Ozs7O0lBQWxCLFVBQW1CLE9BQU8sRUFBRSxPQUFPO1FBQ2pDLElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxJQUFNLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxPQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFHO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sMkNBQVE7Ozs7OztJQUFoQixVQUFpQixNQUFNLEVBQUUsRUFBRTtRQUN6QixLQUFLLElBQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLDJDQUFROzs7Ozs7SUFBaEIsVUFBaUIsT0FBTyxFQUFFLEVBQUU7UUFBNUIsaUJBS0M7O1lBSk8sVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDaEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTyw0Q0FBUzs7Ozs7OztJQUFqQixVQUFrQixHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUUsQ0FBQztJQUM5QyxDQUFDOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQUxrQixVQUFVO2dCQUFpQixTQUFTOzs7dUJBT3BELEtBQUs7O0lBd0RSLCtCQUFDO0NBQUEsQUE3REQsSUE2REM7U0F6RFksd0JBQXdCOzs7SUFDbkMsd0NBQW1COzs7OztJQUdqQixzQ0FBc0I7Ozs7O0lBQ3RCLDRDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhci1uYXYtdGl0bGUnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5pdGVtLm5hbWUpO1xuXG4gICAgaWYgKCB0aGlzLml0ZW0uY2xhc3MgKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5pdGVtLmNsYXNzO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbGVtZW50LCBjbGFzc2VzKTtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuaXRlbS53cmFwcGVyICkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCh0aGlzLml0ZW0ud3JhcHBlci5lbGVtZW50KTtcbiAgICAgIHRoaXMuYWRkQXR0cmlicyh0aGlzLml0ZW0ud3JhcHBlci5hdHRyaWJ1dGVzLCB3cmFwcGVyKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgbmFtZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQXR0cmlicyhhdHRyaWJzLCBlbGVtZW50KSB7XG4gICAgaWYgKGF0dHJpYnMpIHtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJzKSB7XG4gICAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnICYmIHR5cGVvZihhdHRyaWJzW2F0dHJdKSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgdGhpcy5hZGRDbGFzcyhhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYihhdHRyLCBhdHRyaWJzW2F0dHJdLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGUoc3R5bGVzLCBlbCkge1xuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsLCBzdHlsZSwgc3R5bGVzW3N0eWxlXSApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoY2xhc3NlcywgZWwpIHtcbiAgICBjb25zdCBjbGFzc0FycmF5ID0gKEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpKTtcbiAgICBjbGFzc0FycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5sZW5ndGggPiAwKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgZWxlbWVudCApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBdHRyaWIoa2V5LCB2YWx1ZSwgZWwpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwga2V5LCB2YWx1ZSApO1xuICB9XG59XG4iXX0=