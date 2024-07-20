import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  BASE_URL_USER: string = "https://jsonplaceholder.typicode.com/users";
  BASE_URL_CUSTOMER: string = "https://projectapi.gerasim.in/api/RealEstate/";
  BASE_URL_DEPARTMENT: string = "https://projectapi.gerasim.in/api/Complaint/";
  BASE_URL_DEPARTMENT1: string = "https://projectapi.gerasim.in/api/Complaint/AddNewDepartment/"

  http = inject(HttpClient);

  constructor() { }

  getAllUsers() {
    return this.http.get(`${this.BASE_URL_USER}`);
  }

  getAllCustomers() {
    return this.http.get(`${this.BASE_URL_CUSTOMER}GetAllCustomers`);
  }

  saveDepartment(datas: any) {
    return this.http.post(`${this.BASE_URL_DEPARTMENT + "AddNewDepartment"}`, datas);
  }
  
}
