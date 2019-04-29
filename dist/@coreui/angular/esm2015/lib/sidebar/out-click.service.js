/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class OutClickService {
    constructor() {
        this.outClick = new BehaviorSubject({ event: undefined });
        this.outClick$ = this.outClick.asObservable();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    onClick(message) {
        this.outClick.next(message);
    }
}
OutClickService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OutClickService.ctorParameters = () => [];
/** @nocollapse */ OutClickService.ngInjectableDef = i0.defineInjectable({ factory: function OutClickService_Factory() { return new OutClickService(); }, token: OutClickService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutClickService.prototype.outClick;
    /** @type {?} */
    OutClickService.prototype.outClick$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0LWNsaWNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9vdXQtY2xpY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUtyQyxNQUFNLE9BQU8sZUFBZTtJQUsxQjtRQUhRLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ2hFLGNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTFCLENBQUM7Ozs7O0lBRWhCLE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUdDLG1DQUFnRTs7SUFDaEUsb0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPdXRDbGlja1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgb3V0Q2xpY2sgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe2V2ZW50OiB1bmRlZmluZWR9KTtcbiAgb3V0Q2xpY2skID0gdGhpcy5vdXRDbGljay5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DbGljayhtZXNzYWdlOiBhbnkpIHtcbiAgICB0aGlzLm91dENsaWNrLm5leHQobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==