import { ScreenService } from './../../services/screen.service';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(
    private screenService: ScreenService,
    private menuService: MenuService,
  ) {}

  ngOnInit() {}
}
