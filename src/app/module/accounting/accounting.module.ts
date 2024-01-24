import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { ManageAccountComponent } from './manage-account/view/page/manage-account/manage-account.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ManageAccountComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AccountingModule { }
