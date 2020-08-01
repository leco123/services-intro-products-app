import { Department } from './models/department.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [
    {id: 1, name: 'Clothing' },
    {id: 2, name: 'Books' },
    {id: 3, name: 'Electronics' },
    {id: 4, name: 'Computers' },
    {id: 5, name: 'foods' },
    {id: 6, name: 'bear' }
  ];
  private nextID: number = 5;

  constructor() {

   }

  getDepartments(): Department[] {
    return this.departments;
  }

  addDepartment(d: Department){
    this.departments.push({...d, id: this.nextID++, ...d});
    console.log(this.departments);
  }

  getDepartmentById(id: number): Department {
    return this.departments.find((d) => d.id == id);
  }
}
