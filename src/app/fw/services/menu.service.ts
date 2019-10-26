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
  isVertical = false;
  showingLeftSideMenu = false;
  constructor() {}
  toggleLeftSideMenu(): void {
    this.isVertical = true;

    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }
}
