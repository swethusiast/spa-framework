import { initialMenuItems } from './app.menu';
import { MenuService } from './fw/services/menu.service';
import {
  FrameworkConfigService,
  FrameworkConfigSettings,
} from './fw/services/framework-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private frameworkConfigService: FrameworkConfigService,
    private menuService: MenuService,
  ) {
    const config: FrameworkConfigSettings = {
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800,
      socialIcons: [{ imageFile: '', alt: '', link: '' }],
    };
    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;
  }
}
