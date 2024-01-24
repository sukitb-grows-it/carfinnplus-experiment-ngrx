import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/car-loan/car-loan.module').then(m => m.CarLoanModule)
  },
  {
    path: 'manage-account',
    loadChildren: () => import('./module/accounting/accounting.module').then(m => m.AccountingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
