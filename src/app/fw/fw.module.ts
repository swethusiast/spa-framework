import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { FrameworkBodyComponent } from './components/framework-body/framework-body.component';
import { ContentComponent } from './components/content/content.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ScreenBelowLargeDirective } from './directives/screen-below-large.directive';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { MenuComponent } from './components/menus/menu/menu.component';
import { MenuItemComponent } from './components/menus/menu-item/menu-item.component';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenBelowLargeDirective,
    ScreenLargeDirective,
    MenuComponent,
    MenuItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [FrameworkBodyComponent],
})
export class FwModule {}
