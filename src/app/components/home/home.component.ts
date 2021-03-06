import { Component } from '@angular/core';
import { BasicService } from './../../services/basic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private basicService: BasicService) {
    console.info(this.message);
  }

  get message() {
    return this.basicService.message;
  }
}
