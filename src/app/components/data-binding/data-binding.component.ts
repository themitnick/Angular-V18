import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = "Angular 18";
  inputType = "checkbox";
  rollNo: number = 123;
  isIvorian: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = "bg-danger"
  firstName = signal("Konan Yao")

  constructor() {
    console.log("Data Binding Component is loaded");
  }

  showAlert(message: string) {
    alert(message);
  }

  changeCourseName(courseName: string) {
    this.courseName = courseName;
    this.firstName.set("Rodrigue YAO");
  }

}
