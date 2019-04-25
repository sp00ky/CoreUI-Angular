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
import { SidebarService } from './sidebar.service';
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
                    SidebarService,
                    SidebarNavHelper
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUduRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQTZDckYsTUFBTSxPQUFPLGFBQWE7OztZQTNDekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIseUJBQXlCO29CQUN6QixnQkFBZ0I7b0JBQ2hCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0IsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUMxQixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLGdCQUFnQjtvQkFDaEIsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEIsb0JBQW9CO29CQUNwQiwwQkFBMEI7b0JBQzFCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGNBQWM7b0JBQ2QsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG4vLyBDb3JlVUkgU2lkZWJhciBDb21wb25lbnRcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1taW5pbWl6ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9zaWRlYmFyLnNlcnZpY2UnO1xuXG4vLyBDb3JlVUkgU2lkZWJhck5hdiBDb21wb25lbnRcbmltcG9ydCB7IE5hdkRyb3Bkb3duRGlyZWN0aXZlLCBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vc2lkZWJhci1uYXYuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNpZGViYXJOYXZDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtZGl2aWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkxpbmtDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWxpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZIZWxwZXIgfSBmcm9tICcuL3NpZGViYXItbmF2LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1sYWJlbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcbiAgICBOYXZEcm9wZG93bkRpcmVjdGl2ZSxcbiAgICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyRm9ybUNvbXBvbmVudCxcbiAgICBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgU2lkZWJhckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIFNpZGViYXJOYXZMYWJlbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTaWRlYmFyU2VydmljZSxcbiAgICBTaWRlYmFyTmF2SGVscGVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck1vZHVsZSB7IH1cbiJdfQ==