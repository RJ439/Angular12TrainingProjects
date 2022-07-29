import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ww-demo';
  sumOfNumber: number = 0;

  calculateSumSync() {
    let sum = 0;
    for(let i=0; i < 1000000000; i++) {
      sum = sum+(i*i*i*i);
    }
    //update the state
    this.sumOfNumber = sum;
  }

  calculateSumWithSync() {
    const myWebWorker = new Worker(new URL('./calc-bigsum.worker.ts', import.meta.url));
    myWebWorker.onmessage = (message) => {
      console.log('Received the value', message.data);
      this.sumOfNumber = message.data;
    }
    //invoke the worker
    myWebWorker.postMessage(1000000000);
  }
}
