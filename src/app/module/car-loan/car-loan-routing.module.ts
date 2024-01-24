import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSaleCarJobPageComponent } from './table-sale-car-job/view/page/table-sale-car-job-page/table-sale-car-job-page.component';
import { ManagementEmpComponent } from './management-emp/view/management-emp.component';

const routes: Routes = [
  {
    path: '',
    component: TableSaleCarJobPageComponent
  },
  {
    path:'accountManagement',
    component: ManagementEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarLoanRoutingModule { }
