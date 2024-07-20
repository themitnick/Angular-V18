import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { ButtonComponent } from "../../reusableComponent/button/button.component";

@Component({
  selector: 'app-httpclient',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    AlertComponent,
    ButtonComponent
],
  templateUrl: './httpclient.component.html',
  styleUrl: './httpclient.component.css'
})
export class HttpclientComponent implements OnInit{
  
  userList: any = [];
  customerList: any = [];

  departmentForm: FormGroup = new FormGroup({
    departmentId: new FormControl(0),
    departmentName: new FormControl('', 
      [Validators.required, Validators.minLength(5)]
    ),
    departmentLogo: new FormControl('', Validators.required)
  })

  departmentService = inject(DepartmentService);
  
  ngOnInit(): void {
    this.getAllUsers();
    this.getAllCustomers();
  }

  getAllUsers() {
    this.departmentService.getAllUsers().subscribe(result => {
      this.userList = result;
      console.log(this.userList);
    });
  }

  getAllCustomers() {
   this.departmentService.getAllCustomers().subscribe(result => {
    this.customerList = result;
   });
  }

  onSaveDepartment() {
    let departmentFormValue = JSON.stringify(this.departmentForm.value);

    this.departmentService.saveDepartment(departmentFormValue).subscribe((res:any) => {
      debugger;
      if(res.result) {
        alert('Department was created with success');
      }else{
        alert('Department was not created');
      }
    })
  }


}
