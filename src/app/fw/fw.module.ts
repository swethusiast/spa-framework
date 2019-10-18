import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { FrameworkBodyComponent } from './components/framework-body/framework-body.component';
import { ContentComponent } from './components/content/content.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
  ],
  imports: [CommonModule],
  exports: [FrameworkBodyComponent],
})
export class FwModule {}
