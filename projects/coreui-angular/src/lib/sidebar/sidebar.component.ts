import { Component, Input, Inject, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { sidebarCssClasses, validBreakpoints, checkBreakpoint } from '../shared';
import { ClassToggler } from '../shared/toggle-classes';
import { SidebarService } from './sidebar.service';
import { OutClickService } from './out-click.service';

interface SidebarState {
  minimized: boolean;
  opened: boolean;
  breakpoint: string;
}

@Component({
  selector: 'cui-sidebar',
  template: `<ng-content></ng-content>`
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() compact: boolean;
  @Input() display: any;
  @Input() fixed: boolean;
  @Input() minimized: boolean;
  @Input() opened: boolean;
  @Input() offCanvas: boolean;

  private stateToggleSubscription: Subscription;
  private outClickSubscription: Subscription;
  private body: HTMLBodyElement;

  state: SidebarState = {
    minimized: undefined,
    opened: undefined,
    breakpoint: undefined
  };

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private classToggler: ClassToggler,
    private sidebarService: SidebarService,
    private outClickService: OutClickService
  ) {
    renderer.addClass(hostElement.nativeElement, 'c-sidebar');
  }

  ngOnInit(): void {

    this.body = this.document.body;
    this.displayBreakpoint(this.display);
    this.isCompact(this.compact);
    this.isFixed(this.fixed);
    this.isMinimized(this.minimized);
    this.isOffCanvas(this.offCanvas);
    this.isOpened(this.opened);
    this.setState();

    this.stateToggleSubscribe();
    this.outClickSubscribe();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.hostElement.nativeElement, 'c-sidebar-fixed' );

    this.stateToggleSubscribe(false);
    this.outClickSubscribe(false);
  }

  isCompact(compact: boolean = this.compact): void {
    if (compact) {
      this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-compact' );
    }
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-fixed');
    }
  }

  isMinimized(minimized: boolean = this.minimized): void {
    this.sidebarService.toggle({ minimized: minimized});
  }

  isOffCanvas(offCanvas: boolean = this.offCanvas): void {
    if (offCanvas) {
      this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-off-canvas');
    }
  }

  isOpened(opened: boolean = this.opened): void {
    this.sidebarService.toggle({open: opened, breakpoint: this.display});
  }

  displayBreakpoint(display: any = this.display): void {
    if (display !== false) {
      this.sidebarService.toggle({open: true, breakpoint: display});
    }
  }

  setState() {
    this.state.minimized = this.hostElement.nativeElement.classList.contains('c-sidebar-minimized');
    this.state.opened = this.hostElement.nativeElement.classList.contains( `c-sidebar-${this.display}-show` );
  }

  minimize(force?: boolean): boolean {
    const minimize = (typeof force === 'undefined') ? !this.hostElement.nativeElement.classList.contains('c-sidebar-minimized') : force;
    minimize ? this.renderer.addClass(this.hostElement.nativeElement, 'c-sidebar-minimized') :
      this.renderer.removeClass(this.hostElement.nativeElement, 'c-sidebar-minimized');
    this.state.minimized = minimize;
    return minimize;
  }

  open(state: any): boolean {
    const toggle = (typeof state.open === 'undefined');
    const cssClass = Boolean(state.breakpoint) && checkBreakpoint(state.breakpoint, validBreakpoints) ?
        `c-sidebar-${state.breakpoint}-show` :
        sidebarCssClasses[0];
    const mobile = cssClass === sidebarCssClasses[0];
    const opened = this.hostElement.nativeElement.classList.contains( cssClass );
    const open = toggle ? !opened : state.open;
    if (open) {
      this.renderer.addClass(this.hostElement.nativeElement, cssClass );
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, cssClass );
    }
    if (mobile) {
      if (open && (!this.outClickSubscription || this.outClickSubscription.closed)) {
        this.outClickSubscribe();
      }
      if (!open && this.outClickSubscription && !this.outClickSubscription.closed) {
        this.outClickSubscribe(false);
      }
    }
    this.state.opened = <boolean>open;
    return <boolean>open;
  }

  private stateToggleSubscribe(subscribe: Boolean = true) {
    if (subscribe) {
      this.stateToggleSubscription = this.sidebarService.sidebarState$.subscribe((state) => {
        if ('minimize' in state) {
          this.minimize(state.minimize);
        }
        if ('open' in state) {
          this.open(state);
        }
      });
    } else {
      this.stateToggleSubscription.unsubscribe();
    }
  }

  private outClickSubscribe(subscribe: Boolean = true) {
    if (subscribe) {
      this.outClickSubscription = this.outClickService.outClick$.subscribe(message => {
        if (message.event) {
          this.hideMobile(message.event);
        }
      });
    } else {
      this.outClickSubscription.unsubscribe();
    }
  }

  public hideMobile(e) {
    if (this.state.opened) {
      if (!e.target.closest('[cuisidebartoggle]')) {
        this.sidebarService.toggle({open: false, breakpoint: ''});
      }
    }
  }
}
