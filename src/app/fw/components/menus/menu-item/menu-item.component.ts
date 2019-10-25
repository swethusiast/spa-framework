import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/fw/services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  constructor() {}

  ngOnInit() {}
}
