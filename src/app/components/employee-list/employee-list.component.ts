import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink, AlertComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

}
