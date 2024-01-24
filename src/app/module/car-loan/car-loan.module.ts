import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarLoanRoutingModule } from './car-loan-routing.module';
import { TableSaleCarJobPageComponent } from './table-sale-car-job/view/page/table-sale-car-job-page/table-sale-car-job-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { ManagementEmpComponent } from './management-emp/view/management-emp.component';


@NgModule({
  declarations: [
    TableSaleCarJobPageComponent,
    ManagementEmpComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    CarLoanRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class CarLoanModule { }
