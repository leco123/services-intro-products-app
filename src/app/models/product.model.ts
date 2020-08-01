import { Department } from './department.models';
export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    department: Department;
}