interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'cui-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'cui-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'cui-pencil'
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'cui-star',
    children: [
      {
        name: 'Error 404',
        url: '/404',
        icon: 'cui-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'cui-circle-x'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'cui-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
];
