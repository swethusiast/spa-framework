import { MenuItem } from './fw/services/menu.service';

export let initialMenuItems: MenuItem[] = [
  {
    text: 'Dashboard',
    icon: 'fa fa-tachometer',
    route: '/dashboard',
    submenu: null,
  },
  {
    text: 'Countries',
    icon: 'fa fa-flag-checkered',
    route: '/countries',
    submenu: null,
  },
  {
    text: 'Settings',
    icon: 'fa fa-cog',
    route: '/settings',
    submenu: null,
  },
];
