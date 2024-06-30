import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-httpclient',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './httpclient.component.html',
  styleUrl: './httpclient.component.css'
})
export class HttpclientComponent implements OnInit{
  
  BASE_URL_USER = "https://jsonplaceholder.typicode.com/users";
  BASE_URL_CUSTOMER = "https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers";
  BASE_URL_DEPARTMENT = "https://projectapi.gerasim.in/api/Complaint/AddNewDepartment";
  userList: any = [];
  customerList: any = [];

  departmentForm: FormGroup = new FormGroup({
    departmentId: new FormControl(0),
    departmentName: new FormControl('', 
      [Validators.required, Validators.minLength(5)]
    ),
    departmentLogo: new FormControl('', Validators.required)
  })

  http = inject(HttpClient);
  
  ngOnInit(): void {
    this.getAllUsers();
    // this.getAllCustomers();
  }

  getAllUsers() {
    this.http.get(this.BASE_URL_USER).subscribe(result => {
      this.userList = result;
    } )
  }

  getAllCustomers() {
    this.http.get(this.BASE_URL_CUSTOMER).subscribe((result: any) => {
      this.customerList = result
    })
  }

  onSaveDepartment() {
    let departmentFormValue = JSON.stringify(this.departmentForm.value);
    this.http.post(this.BASE_URL_DEPARTMENT, departmentFormValue).subscribe((res:any) => {
      debugger;
      if(res.result) {
        alert('Department was created with success');
      }else{
        alert('Department was not created');
      }
    })
  }

}
