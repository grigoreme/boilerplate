import { BasicService } from './../../services/basic.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private basicService: BasicService) { }

  get message() {
    return this.basicService.message;
  }
}
