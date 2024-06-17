import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  constructor(private router: Router) {

  }

  gotoListEmployee() {
    this.router.navigate(['/list-employee']);
  }

}
