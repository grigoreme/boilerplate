import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[];

  constructor() {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'fa fa-plus' },
        { label: 'Open', icon: 'fa fa-download' },
      ],
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'fa fa-refresh' },
        { label: 'Redo', icon: 'fa fa-repeat' },
      ],
    }];
  }
}
