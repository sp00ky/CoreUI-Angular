/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../sidebar-nav.service';
var SidebarNavLabelComponent = /** @class */ (function () {
    function SidebarNavLabelComponent(helper) {
        this.helper = helper;
    }
    /**
     * @return {?}
     */
    SidebarNavLabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SidebarNavLabelComponent.prototype.getItemClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var labelClass = {
            'nav-label': true,
            'active': true
        };
        /** @type {?} */
        var itemClass = this.item.class;
        labelClass[itemClass] = !!itemClass;
        return labelClass;
    };
    /**
     * @return {?}
     */
    SidebarNavLabelComponent.prototype.getLabelIconClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classes = this.helper.getIconClass(this.item);
        /** @type {?} */
        var variant = "text-" + this.item.label.variant;
        classes[variant] = !!variant;
        /** @type {?} */
        var labelClass = this.item.label.class;
        classes[labelClass] = !!labelClass;
        return classes;
    };
    SidebarNavLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-sidebar-nav-label',
                    template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cuiHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{item.name}}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n</a>\n"
                }] }
    ];
    /** @nocollapse */
    SidebarNavLabelComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    SidebarNavLabelComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return SidebarNavLabelComponent;
}());
export { SidebarNavLabelComponent };
if (false) {
    /** @type {?} */
    SidebarNavLabelComponent.prototype.item;
    /** @type {?} */
    SidebarNavLabelComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RDtJQU9FLGtDQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzdCLENBQUM7Ozs7SUFFTCwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsK0NBQVk7OztJQUFaOztZQUNRLFVBQVUsR0FBRztZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNmOztZQUNLLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDakMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNELG9EQUFpQjs7O0lBQWpCOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztZQUM3QyxPQUFPLEdBQUcsVUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFTO1FBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDOztZQUN2QixVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUN4QyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDZWQUFpRDtpQkFDbEQ7Ozs7Z0JBTE8sZ0JBQWdCOzs7dUJBT3JCLEtBQUs7O0lBMEJSLCtCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EzQlksd0JBQXdCOzs7SUFDbkMsd0NBQW1COztJQUdqQiwwQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL3NpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktc2lkZWJhci1uYXYtbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXRJdGVtQ2xhc3MoKSB7XG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHtcbiAgICAgICduYXYtbGFiZWwnOiB0cnVlLFxuICAgICAgJ2FjdGl2ZSc6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IGl0ZW1DbGFzcyA9IHRoaXMuaXRlbS5jbGFzcztcbiAgICBsYWJlbENsYXNzW2l0ZW1DbGFzc10gPSAhIWl0ZW1DbGFzcztcbiAgICByZXR1cm4gbGFiZWxDbGFzcztcbiAgfVxuICBnZXRMYWJlbEljb25DbGFzcygpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5oZWxwZXIuZ2V0SWNvbkNsYXNzKHRoaXMuaXRlbSk7XG4gICAgY29uc3QgdmFyaWFudCA9IGB0ZXh0LSR7dGhpcy5pdGVtLmxhYmVsLnZhcmlhbnR9YDtcbiAgICBjbGFzc2VzW3ZhcmlhbnRdID0gISF2YXJpYW50O1xuICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSB0aGlzLml0ZW0ubGFiZWwuY2xhc3M7XG4gICAgY2xhc3Nlc1tsYWJlbENsYXNzXSA9ICEhbGFiZWxDbGFzcztcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19