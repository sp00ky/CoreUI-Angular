export const sidebarCssClasses: Array<string> = [
  'c-sidebar-show',
  'c-sidebar-sm-show',
  'c-sidebar-md-show',
  'c-sidebar-lg-show',
  'c-sidebar-xl-show'
];

export const asideMenuCssClasses: Array<string> = [
  'aside-menu-show',
  'aside-menu-sm-show',
  'aside-menu-md-show',
  'aside-menu-lg-show',
  'aside-menu-xl-show'
];

export const validBreakpoints: Array<string> = [ 'sm', 'md', 'lg', 'xl' ];

export function checkBreakpoint (breakpoint: string, list: Array<string>): boolean {
  return list.indexOf(breakpoint) > -1;
}
