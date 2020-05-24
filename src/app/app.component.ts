import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'big-document-fe';
  arraySize: number;

  onArraySizeChange(size: number){
    this.arraySize = size;
    console.log(this.arraySize);
  }
}
