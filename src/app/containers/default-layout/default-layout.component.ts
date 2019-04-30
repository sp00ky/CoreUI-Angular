import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private observer: MutationObserver;
  public element: HTMLElement;

  constructor(@Inject(DOCUMENT) document?: any) {}

  ngOnInit(): void {
    this.element = document.getElementById('sidebar');
    console.log(this.element);
    this.observer = new MutationObserver((mutations) => {
      this.sidebarMinimized = this.element.classList.contains('c-sidebar-minimized');
    });
    this.observer.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
