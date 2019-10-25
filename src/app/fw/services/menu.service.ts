import { Injectable } from '@angular/core';

export interface MenuItem {
  text: string;
  icon: string;
  route: string;
  submenu: MenuItem[];
}
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  items: MenuItem[];
  constructor() {}
}
