import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public submitted: boolean = false;
  private timeout: number = 10000;

  submit() {
    this.submitted = true;
  }
}
