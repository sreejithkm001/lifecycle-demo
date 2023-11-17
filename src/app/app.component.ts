import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lifecycle';
  demoInput = 'Hello from App Component!';
  
  inputText: string = '';
  OnSubmit(inputEL: HTMLInputElement) {
    this.inputText = inputEL.value;
  }
}
