import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSaleCarJobPageComponent } from './table-sale-car-job/view/page/table-sale-car-job-page/table-sale-car-job-page.component';
import { tableCarJobResolver } from './core/resolver/table-car-job.resolver';

const routes: Routes = [
  {
    path: '',
    component: TableSaleCarJobPageComponent,
    resolve: {
      pageConfig: tableCarJobResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarLoanRoutingModule { }
