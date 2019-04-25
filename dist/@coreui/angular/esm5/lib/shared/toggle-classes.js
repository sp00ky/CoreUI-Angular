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
     * @return {?}
     */
    ClassToggler.prototype.removeClasses = /**
     * @param {?} NewClassNames
     * @return {?}
     */
    function (NewClassNames) {
        var _this = this;
        /** @type {?} */
        var MatchClasses = NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        function (Class) { return _this.document.body.classList.contains(Class); }));
        return MatchClasses.indexOf(true) !== -1;
    };
    /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @return {?}
     */
    ClassToggler.prototype.toggleClasses = /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @return {?}
     */
    function (Toggle, ClassNames) {
        var _this = this;
        /** @type {?} */
        var Level = ClassNames.indexOf(Toggle);
        /** @type {?} */
        var NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            function (Class) { return _this.renderer.removeClass(_this.document.body, Class); }));
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNsYXNzZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFLRSxzQkFDNEIsUUFBYSxFQUMvQixlQUFpQztRQURmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBRXpDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxvQ0FBYTs7OztJQUFiLFVBQWMsYUFBYTtRQUEzQixpQkFHQzs7WUFGTyxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQTVDLENBQTRDLEVBQUM7UUFDL0YsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELG9DQUFhOzs7OztJQUFiLFVBQWMsTUFBTSxFQUFFLFVBQVU7UUFBaEMsaUJBU0M7O1lBUk8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztZQUNsQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDckMsYUFBYSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFwRCxDQUFvRCxFQUFDLENBQUM7U0FDcEY7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Z0JBMUJGLFVBQVU7Ozs7Z0RBTU4sTUFBTSxTQUFDLFFBQVE7Z0JBVG1CLGdCQUFnQjs7SUE4QnZELG1CQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksWUFBWTs7Ozs7O0lBRXZCLGdDQUE0Qjs7Ozs7SUFHMUIsZ0NBQXVDOzs7OztJQUN2Qyx1Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGFzc1RvZ2dsZXIge1xuXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcykge1xuICAgIGNvbnN0IE1hdGNoQ2xhc3NlcyA9IE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gdGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhDbGFzcykpO1xuICAgIHJldHVybiBNYXRjaENsYXNzZXMuaW5kZXhPZih0cnVlKSAhPT0gLTE7XG4gIH1cblxuICB0b2dnbGVDbGFzc2VzKFRvZ2dsZSwgQ2xhc3NOYW1lcykge1xuICAgIGNvbnN0IExldmVsID0gQ2xhc3NOYW1lcy5pbmRleE9mKFRvZ2dsZSk7XG4gICAgY29uc3QgTmV3Q2xhc3NOYW1lcyA9IENsYXNzTmFtZXMuc2xpY2UoMCwgTGV2ZWwgKyAxKTtcblxuICAgIGlmICh0aGlzLnJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcykpIHtcbiAgICAgIE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIENsYXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBUb2dnbGUpO1xuICAgIH1cbiAgfVxufVxuIl19