import { ScreenService } from './../services/screen.service';
import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[screenLarge]',
})
export class ScreenLargeDirective implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<object>,
    private screenService: ScreenService,
  ) {
    this.screenSubscription = screenService.resize$.subscribe(() =>
      this.onResize(),
    );
  }
  @Input()
  set screenLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition =
      this.screenService.screenWidth >= this.screenService.largeBreakpoint;
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
  onResize() {
    // trigger the setter
    this.screenLarge = false;
  }
  ngOnDestroy(): void {
    this.screenSubscription.unsubscribe();
  }
}
