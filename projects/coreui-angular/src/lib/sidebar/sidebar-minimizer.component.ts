import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cui-sidebar-minimizer',
  template: ``,
})
export class SidebarMinimizerComponent {

  @HostBinding('attr.role') role = 'button';
  @HostBinding('class') classes = 'c-sidebar-minimizer';

}
