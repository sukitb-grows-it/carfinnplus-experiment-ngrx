import { Inject, Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { TableEmployee } from "../model/management-emp.model";
import { TableEmployeeClient, } from "../client/table-manage-emp.client";
import { switchMap, tap } from "rxjs";

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

  readonly tableEmployees$ = this.select((state) => state.tableEmployees.employeeManage);
  readonly loading$ = this.select((state) => state.loading);

  getTableEmployee = this.effect<string>((type$) => {
    return type$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((type) =>
        this.tableManageAccountClient
          .fetchTableManagementAccount(type)
          .pipe(
            tapResponse(
              (tableEmployees) => {
                this.patchState({ tableEmployees });
              },
              (error) => {
                console.log(error);
              },
              () => this.patchState({ loading: false }),
            ),
          ),
      ),
    )
  })

}
