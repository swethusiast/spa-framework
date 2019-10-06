import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [FrameworkBodyComponent, ContentComponent],
  imports: [CommonModule],
  exports: [FrameworkBodyComponent],
})
export class FwModule {}
