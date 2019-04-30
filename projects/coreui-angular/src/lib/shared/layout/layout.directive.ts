import {Directive, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import { asideMenuCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';
import { SidebarService } from '../../sidebar/sidebar.service';
import { OutClickService } from '../../sidebar/out-click.service';

/**
* Allows the sidebar to be toggled via click.
*/
@Directive({
  selector: '[cuiSidebarToggle]',
  providers: [ClassToggler]
})
export class SidebarToggleDirective {
  @Input('cuiSidebarToggle') breakpoint: string;
  constructor(
    private sidebarService: SidebarService
  ) {}
  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const bp = this.breakpoint;
    this.sidebarService.toggle({ open: undefined, breakpoint: bp });
  }
}

@Directive({
  selector: '[cuiSidebarMinimize]'
})
export class SidebarMinimizeDirective {

  constructor(
    private sidebarService: SidebarService
  ) { }

  @HostListener('click', ['$event'])
  toggleMinimize($event: any) {
    $event.preventDefault();
    this.sidebarService.toggle({ minimize: undefined });
  }
}

@Directive({
  selector: '[cuiMobileSidebarToggle]'
})
export class MobileSidebarToggleDirective {
  constructor(
    private sidebarService: SidebarService
  ) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.sidebarService.toggle({open: undefined, breakpoint: ''});
  }
}

/**
* Allows the off-canvas sidebar to be closed via click.
*/
@Directive({
  selector: '[cuiSidebarClose]'
})
export class SidebarOffCanvasCloseDirective {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
  ) { }

  @HostListener('click', ['$event'])
  toggle($event: any) {
    $event.preventDefault();

    const body = this.document.body;
    if (body.classList.contains('sidebar-off-canvas')) {
      body.classList.contains('sidebar-show') ?
        this.renderer.removeClass(body, 'sidebar-show') :
        this.renderer.addClass(body, 'sidebar-show');
    }
  }
}

@Directive({
  selector: '[cuiBrandMinimize]'
})
export class BrandMinimizeDirective {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
  ) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const body = this.document.body;
    body.classList.contains('brand-minimized') ?
      this.renderer.removeClass(body, 'brand-minimized') :
      this.renderer.addClass(body, 'brand-minimized');
  }
}


/**
* Allows the aside to be toggled via click.
*/
@Directive({
  selector: '[cuiAsideMenuToggle]',
  providers: [ClassToggler]
})
export class AsideToggleDirective implements OnInit {
  @Input('cuiAsideMenuToggle') breakpoint: string;
  public bp;
  constructor(
    private elementRef: ElementRef,
    private classToggler: ClassToggler
  ) {}
  ngOnInit(): void {
    this.bp = this.breakpoint;
  }
  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const cssClass = this.bp ? `c-sidebar-${this.bp}-show` : asideMenuCssClasses[0];
      this.classToggler.toggleClasses(cssClass, asideMenuCssClasses, this.elementRef.nativeElement);
  }
}

@Directive({
  selector: '[cuiHtmlAttr]'
})
export class HtmlAttributesDirective implements OnInit {
  @Input() cuiHtmlAttr: {[key: string]: string };

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    const attribs = this.cuiHtmlAttr;
    for (const attr in attribs) {
      if (attr === 'style' && typeof(attribs[attr]) === 'object' ) {
        this.setStyle(attribs[attr]);
      } else if (attr === 'class') {
        this.addClass(attribs[attr]);
      } else {
        this.setAttrib(attr, attribs[attr]);
      }
    }
  }

  private setStyle(styles) {
    for (const style in styles) {
      this.renderer.setStyle(this.el.nativeElement, style, styles[style] );
    }
  }

  private addClass(classes) {
    const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
    classArray.filter((element) => element.length > 0).forEach(element => {
      this.renderer.addClass(this.el.nativeElement, element );
    });
  }

  private setAttrib(key, value) {
    this.renderer.setAttribute(this.el.nativeElement, key, value );
  }
}

/**
 * Detects click outside the element
 */
@Directive({ selector: '[cuiOutClick]' })
export class OutClickDirective {

  constructor(
    private elementRef: ElementRef,
    private outClickService: OutClickService
  ) {}

  @HostListener('document:click', ['$event'])
  public onDocumentClick($event: MouseEvent): void {
    const targetElement = $event.target as HTMLElement;

    // Check if the click was outside the element
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
      this.outClickService.onClick({event: $event});
    }
  }
}
