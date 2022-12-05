import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'docker-sample-angular';

  constructor() {
    console.log(environment.APP_NAME);
    this.title = environment.APP_NAME;
  }
}
