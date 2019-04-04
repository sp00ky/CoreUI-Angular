/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/layout/layout.module';
// CoreUI Sidebar Component
import { SidebarComponent } from './sidebar.component';
import { SidebarFooterComponent } from './sidebar-footer.component';
import { SidebarFormComponent } from './sidebar-form.component';
import { SidebarHeaderComponent } from './sidebar-header.component';
import { SidebarMinimizerComponent } from './sidebar-minimizer.component';
// CoreUI SidebarNav Component
import { NavDropdownDirective, NavDropdownToggleDirective } from './sidebar-nav.directive';
import { SidebarNavComponent } from './sidebar-nav.component';
import { SidebarNavDividerComponent } from './sidebar-nav/sidebar-nav-divider.component';
import { SidebarNavDropdownComponent } from './sidebar-nav/sidebar-nav-dropdown.component';
import { SidebarNavItemsComponent } from './sidebar-nav/sidebar-nav-items.component';
import { SidebarNavLinkComponent } from './sidebar-nav/sidebar-nav-link.component';
import { SidebarNavTitleComponent } from './sidebar-nav/sidebar-nav-title.component';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavLabelComponent } from './sidebar-nav/sidebar-nav-label.component';
export class SidebarModule {
}
SidebarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    LayoutModule
                ],
                exports: [
                    SidebarFooterComponent,
                    SidebarFormComponent,
                    SidebarHeaderComponent,
                    SidebarMinimizerComponent,
                    SidebarComponent,
                    SidebarNavItemsComponent,
                    SidebarNavComponent,
                    SidebarNavDividerComponent,
                    SidebarNavDropdownComponent,
                    SidebarNavLinkComponent,
                    SidebarNavTitleComponent,
                    NavDropdownDirective,
                    NavDropdownToggleDirective,
                    LayoutModule
                ],
                declarations: [
                    SidebarFooterComponent,
                    SidebarFormComponent,
                    SidebarHeaderComponent,
                    SidebarMinimizerComponent,
                    SidebarMinimizerComponent,
                    SidebarComponent,
                    SidebarNavItemsComponent,
                    SidebarNavComponent,
                    SidebarNavDividerComponent,
                    SidebarNavDropdownComponent,
                    SidebarNavLinkComponent,
                    SidebarNavTitleComponent,
                    NavDropdownDirective,
                    NavDropdownToggleDirective,
                    SidebarNavLabelComponent
                ],
                providers: [
                    SidebarNavHelper
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRTFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBNkNyRixNQUFNLE9BQU8sYUFBYTs7O1lBM0N6QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLGdCQUFnQjtvQkFDaEIsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEIsb0JBQW9CO29CQUNwQiwwQkFBMEI7b0JBQzFCLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QixnQkFBZ0I7b0JBQ2hCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUMxQix3QkFBd0I7aUJBQ3pCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2xheW91dC9sYXlvdXQubW9kdWxlJztcbi8vIENvcmVVSSBTaWRlYmFyIENvbXBvbmVudFxuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQnO1xuLy8gQ29yZVVJIFNpZGViYXJOYXYgQ29tcG9uZW50XG5pbXBvcnQgeyBOYXZEcm9wZG93bkRpcmVjdGl2ZSwgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL3NpZGViYXItbmF2LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWRpdmlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItbmF2L3NpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SGVscGVyIH0gZnJvbSAnLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJGb3JtQ29tcG9uZW50LFxuICAgIFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBTaWRlYmFyQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgU2lkZWJhckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIFNpZGViYXJOYXZMYWJlbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTaWRlYmFyTmF2SGVscGVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck1vZHVsZSB7IH1cbiJdfQ==