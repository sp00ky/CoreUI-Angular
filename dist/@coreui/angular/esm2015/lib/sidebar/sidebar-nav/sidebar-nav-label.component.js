/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../sidebar-nav.service';
export class SidebarNavLabelComponent {
    /**
     * @param {?} helper
     */
    constructor(helper) {
        this.helper = helper;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getItemClass() {
        /** @type {?} */
        const labelClass = {
            'nav-label': true,
            'active': true
        };
        /** @type {?} */
        const itemClass = this.item.class;
        labelClass[itemClass] = !!itemClass;
        return labelClass;
    }
    /**
     * @return {?}
     */
    getLabelIconClass() {
        /** @type {?} */
        const classes = this.helper.getIconClass(this.item);
        /** @type {?} */
        const variant = `text-${this.item.label.variant}`;
        classes[variant] = !!variant;
        /** @type {?} */
        const labelClass = this.item.label.class;
        classes[labelClass] = !!labelClass;
        return classes;
    }
}
SidebarNavLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-sidebar-nav-label',
                template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cuiHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{item.name}}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n</a>\n"
            }] }
];
/** @nocollapse */
SidebarNavLabelComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
SidebarNavLabelComponent.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SidebarNavLabelComponent.prototype.item;
    /** @type {?} */
    SidebarNavLabelComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQU14RCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBR25DLFlBQ1MsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDN0IsQ0FBQzs7OztJQUVMLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixVQUFVLEdBQUc7WUFDakIsV0FBVyxFQUFFLElBQUk7WUFDakIsUUFBUSxFQUFFLElBQUk7U0FDZjs7Y0FDSyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2pDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BDLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCxpQkFBaUI7O2NBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O2NBQzdDLE9BQU8sR0FBRyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7Y0FDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7UUFDeEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDbkMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2VkFBaUQ7YUFDbEQ7Ozs7WUFMTyxnQkFBZ0I7OzttQkFPckIsS0FBSzs7OztJQUFOLHdDQUFtQjs7SUFHakIsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VpLXNpZGViYXItbmF2LWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0SXRlbUNsYXNzKCkge1xuICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSB7XG4gICAgICAnbmF2LWxhYmVsJzogdHJ1ZSxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfTtcbiAgICBjb25zdCBpdGVtQ2xhc3MgPSB0aGlzLml0ZW0uY2xhc3M7XG4gICAgbGFiZWxDbGFzc1tpdGVtQ2xhc3NdID0gISFpdGVtQ2xhc3M7XG4gICAgcmV0dXJuIGxhYmVsQ2xhc3M7XG4gIH1cbiAgZ2V0TGFiZWxJY29uQ2xhc3MoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuaGVscGVyLmdldEljb25DbGFzcyh0aGlzLml0ZW0pO1xuICAgIGNvbnN0IHZhcmlhbnQgPSBgdGV4dC0ke3RoaXMuaXRlbS5sYWJlbC52YXJpYW50fWA7XG4gICAgY2xhc3Nlc1t2YXJpYW50XSA9ICEhdmFyaWFudDtcbiAgICBjb25zdCBsYWJlbENsYXNzID0gdGhpcy5pdGVtLmxhYmVsLmNsYXNzO1xuICAgIGNsYXNzZXNbbGFiZWxDbGFzc10gPSAhIWxhYmVsQ2xhc3M7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn1cbiJdfQ==