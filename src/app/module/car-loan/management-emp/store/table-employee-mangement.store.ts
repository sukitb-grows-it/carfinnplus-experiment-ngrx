import { Inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { TableEmployee } from "../model/management-emp.model";
import { TableEmployeeClient, } from "../client/table-manage-emp.client";

export interface TableEmployeeState {
  tableEmployees: TableEmployee;
  loading: boolean;
}

const initialTableManagementEmpState: TableEmployeeState = {
  tableEmployees: {
    employeeManage: [],
  },
  loading: false
}

@Injectable(
  { providedIn: 'root', }
)

export class TableEmployeeStore extends ComponentStore<TableEmployeeState>{
  constructor(private tableManageAccountClient: TableEmployeeClient) {
    super(initialTableManagementEmpState);
  }

  readonly tableEmployees$ = this.select((state) => state.tableEmployees);
  readonly loading$ = this.select((state) => state.loading);

  readonly tableEmployeeType$ = this.select(
    this.tableEmployees$,
    (tableEmployees) =>{
      return tableEmployees
    }
  )

}
