import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3>On each button click a single ApplicationRef.tick() is triggered</h3>

    <div>Counter: {{ counter }}</div>

    <div>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  ngDoCheck() {
    console.log('Angular change detection cycle is running.');
  }
}
