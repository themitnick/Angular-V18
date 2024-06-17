import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';

export const routes: Routes = [
    {
        path: 'add-employee',
        component: AddEmployeeComponent
    },
    {
        path: 'list-employee',
        component: EmployeeListComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
    {
        path: 'template-form', component: TemplateComponent
    },
    {
        path: 'reactive-form', component: ReactiveComponent
    }
];
