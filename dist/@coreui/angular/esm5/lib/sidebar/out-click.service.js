/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var OutClickService = /** @class */ (function () {
    function OutClickService() {
        this.outClick = new BehaviorSubject({ event: undefined });
        this.outClick$ = this.outClick.asObservable();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    OutClickService.prototype.onClick = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.outClick.next(message);
    };
    OutClickService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OutClickService.ctorParameters = function () { return []; };
    /** @nocollapse */ OutClickService.ngInjectableDef = i0.defineInjectable({ factory: function OutClickService_Factory() { return new OutClickService(); }, token: OutClickService, providedIn: "root" });
    return OutClickService;
}());
export { OutClickService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutClickService.prototype.outClick;
    /** @type {?} */
    OutClickService.prototype.outClick$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0LWNsaWNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9vdXQtY2xpY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUVyQztJQVFFO1FBSFEsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFNLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDaEUsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFMUIsQ0FBQzs7Ozs7SUFFaEIsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBTEQ7Q0FnQkMsQUFiRCxJQWFDO1NBVlksZUFBZTs7Ozs7O0lBRTFCLG1DQUFnRTs7SUFDaEUsb0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPdXRDbGlja1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgb3V0Q2xpY2sgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe2V2ZW50OiB1bmRlZmluZWR9KTtcbiAgb3V0Q2xpY2skID0gdGhpcy5vdXRDbGljay5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DbGljayhtZXNzYWdlOiBhbnkpIHtcbiAgICB0aGlzLm91dENsaWNrLm5leHQobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==