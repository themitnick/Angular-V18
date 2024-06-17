import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptTerms: false
  }

  formValue: any;

  onSubmit() {
    debugger
    this.formValue = this.studentObj
  }

  resetForm() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zipCode: '',
      isAcceptTerms: false
    }
  }

  
}
