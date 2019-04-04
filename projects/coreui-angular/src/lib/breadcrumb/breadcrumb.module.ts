import { CommonModule} from '@angular/common';
import { NgModule, ModuleWithProviders} from '@angular/core';
import { RouterModule } from '@angular/router';

// CoreUI Breadcrumb Component
import { BreadcrumbService } from './breadcrumb.service';
import { BreadcrumbComponent } from './breadcrumb.component';

// @dynamic
@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ BreadcrumbComponent ],
  declarations: [ BreadcrumbComponent ]
})
export class BreadcrumbModule {
  static forRoot(config?: any): ModuleWithProviders {
    return {
      ngModule: BreadcrumbModule,
      providers: [
        BreadcrumbService
      ]
    };
  }
}
