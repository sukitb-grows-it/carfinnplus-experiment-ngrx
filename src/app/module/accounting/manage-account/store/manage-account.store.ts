import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { AccountList, TableAccoutList } from '../model/manage-account.model';
import { TableManageAccountClient } from '../client/manage-account.client';
import { Observable, exhaustMap, map, switchMap, tap } from 'rxjs';

export interface ManageAccountState {
  tableManageAccount: TableAccoutList;
  loading: boolean;
}

const initialManageAccountState: ManageAccountState = {
  tableManageAccount: {
    allAccount: [],
  },
  loading: false,
};

@Injectable({
  providedIn: 'root',
})
export class ManageAccountStore extends ComponentStore<ManageAccountState> {
  constructor(private tableManageAccountClient: TableManageAccountClient) {
    super(initialManageAccountState);
  }

  readonly tableManageAccount$ = this.select(
    (state) => state.tableManageAccount.allAccount,
  );
  readonly loading$ = this.select((state) => state.loading);

  getTableManageAccount = this.effect<string>((accountType$) => {
    return accountType$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((accountType) =>
        this.tableManageAccountClient.fetchTableManageAccount(accountType).pipe(
          tapResponse({
            next: (tableManageAccount) =>
              this.patchState({ tableManageAccount }),
            error: (error) => console.log(error),
            finalize: () => this.patchState({ loading: false }),
          }),
        ),
      ),
    );
  });
}
