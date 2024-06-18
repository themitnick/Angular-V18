import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("",
      [Validators.required, Validators.minLength(3)]
    ),
    lastName: new FormControl(),
    userName: new FormControl("", 
      [Validators.email]
    ),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl("",
      [Validators.required, Validators.maxLength(5)]
    ),
    isAcceptTerms: new FormControl()
  });

  formValue: any;

  onSave() {
    debugger
    this.formValue = this.studentForm.value;
  }
}
