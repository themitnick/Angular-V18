import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { CustomePipe } from '../../pipes/custome.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
    CustomePipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "Angular 18";
  currentDate = new Date();
  currentTime: Observable<Date> = new Observable<Date>;

  student: any = {
    name: "John Doe",
    city: "Kami",
    empId: 666,
    state: 'Belier'
  };

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }

}
