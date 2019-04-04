import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
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

@NgModule({
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
})
export class SidebarModule { }
