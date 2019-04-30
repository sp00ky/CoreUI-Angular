/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var ClassToggler = /** @class */ (function () {
    function ClassToggler(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} NewClassNames
     * @param {?} element
     * @return {?}
     */
    ClassToggler.prototype.removeClasses = /**
     * @param {?} NewClassNames
     * @param {?} element
     * @return {?}
     */
    function (NewClassNames, element) {
        /** @type {?} */
        var MatchClasses = NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        function (Class) { return element.classList.contains(Class); }));
        return MatchClasses.indexOf(true) !== -1;
    };
    /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @param {?} element
     * @return {?}
     */
    ClassToggler.prototype.toggleClasses = /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @param {?} element
     * @return {?}
     */
    function (Toggle, ClassNames, element) {
        var _this = this;
        /** @type {?} */
        var Level = ClassNames.indexOf(Toggle);
        /** @type {?} */
        var NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames, element)) {
            NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            function (Class) { return _this.renderer.removeClass(element, Class); }));
        }
        else {
            this.renderer.addClass(element, Toggle);
        }
    };
    ClassToggler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClassToggler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: RendererFactory2 }
    ]; };
    return ClassToggler;
}());
export { ClassToggler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassToggler.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ClassToggler.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ClassToggler.prototype.rendererFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNsYXNzZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFLRSxzQkFDNEIsUUFBYSxFQUMvQixlQUFpQztRQURmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRUQsb0NBQWE7Ozs7O0lBQWIsVUFBYyxhQUFhLEVBQUUsT0FBTzs7WUFDNUIsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsRUFBQztRQUNwRixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7OztJQUVELG9DQUFhOzs7Ozs7SUFBYixVQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTztRQUF6QyxpQkFTQzs7WUFSTyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O1lBQ2xDLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXBELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDOUMsYUFBYSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBekMsQ0FBeUMsRUFBQyxDQUFDO1NBQ3pFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOztnQkExQkYsVUFBVTs7OztnREFNTixNQUFNLFNBQUMsUUFBUTtnQkFUbUIsZ0JBQWdCOztJQThCdkQsbUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSxZQUFZOzs7Ozs7SUFFdkIsZ0NBQTRCOzs7OztJQUcxQixnQ0FBdUM7Ozs7O0lBQ3ZDLHVDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsYXNzVG9nZ2xlciB7XG5cbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcywgZWxlbWVudCkge1xuICAgIGNvbnN0IE1hdGNoQ2xhc3NlcyA9IE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3MpKTtcbiAgICByZXR1cm4gTWF0Y2hDbGFzc2VzLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3NlcyhUb2dnbGUsIENsYXNzTmFtZXMsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBMZXZlbCA9IENsYXNzTmFtZXMuaW5kZXhPZihUb2dnbGUpO1xuICAgIGNvbnN0IE5ld0NsYXNzTmFtZXMgPSBDbGFzc05hbWVzLnNsaWNlKDAsIExldmVsICsgMSk7XG5cbiAgICBpZiAodGhpcy5yZW1vdmVDbGFzc2VzKE5ld0NsYXNzTmFtZXMsIGVsZW1lbnQpKSB7XG4gICAgICBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgQ2xhc3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBUb2dnbGUpO1xuICAgIH1cbiAgfVxufVxuIl19