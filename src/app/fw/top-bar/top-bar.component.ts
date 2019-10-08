import { FrameworkConfigService } from '../services/framework-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor(private frameworkConfigService: FrameworkConfigService) {}

  ngOnInit() {}
}
