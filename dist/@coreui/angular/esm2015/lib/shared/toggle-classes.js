/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class ClassToggler {
    /**
     * @param {?} document
     * @param {?} rendererFactory
     */
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} NewClassNames
     * @param {?} element
     * @return {?}
     */
    removeClasses(NewClassNames, element) {
        /** @type {?} */
        const MatchClasses = NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        (Class) => element.classList.contains(Class)));
        return MatchClasses.indexOf(true) !== -1;
    }
    /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @param {?} element
     * @return {?}
     */
    toggleClasses(Toggle, ClassNames, element) {
        /** @type {?} */
        const Level = ClassNames.indexOf(Toggle);
        /** @type {?} */
        const NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames, element)) {
            NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            (Class) => this.renderer.removeClass(element, Class)));
        }
        else {
            this.renderer.addClass(element, Toggle);
        }
    }
}
ClassToggler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClassToggler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNsYXNzZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBSXZCLFlBQzRCLFFBQWEsRUFDL0IsZUFBaUM7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUV6QyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTzs7Y0FDNUIsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ3BGLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTzs7Y0FDakMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztjQUNsQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzlDLGFBQWEsQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBQyxDQUFDO1NBQ3pFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7WUExQkYsVUFBVTs7Ozs0Q0FNTixNQUFNLFNBQUMsUUFBUTtZQVRtQixnQkFBZ0I7Ozs7Ozs7SUFNckQsZ0NBQTRCOzs7OztJQUcxQixnQ0FBdUM7Ozs7O0lBQ3ZDLHVDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsYXNzVG9nZ2xlciB7XG5cbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcywgZWxlbWVudCkge1xuICAgIGNvbnN0IE1hdGNoQ2xhc3NlcyA9IE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3MpKTtcbiAgICByZXR1cm4gTWF0Y2hDbGFzc2VzLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3NlcyhUb2dnbGUsIENsYXNzTmFtZXMsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBMZXZlbCA9IENsYXNzTmFtZXMuaW5kZXhPZihUb2dnbGUpO1xuICAgIGNvbnN0IE5ld0NsYXNzTmFtZXMgPSBDbGFzc05hbWVzLnNsaWNlKDAsIExldmVsICsgMSk7XG5cbiAgICBpZiAodGhpcy5yZW1vdmVDbGFzc2VzKE5ld0NsYXNzTmFtZXMsIGVsZW1lbnQpKSB7XG4gICAgICBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgQ2xhc3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBUb2dnbGUpO1xuICAgIH1cbiAgfVxufVxuIl19