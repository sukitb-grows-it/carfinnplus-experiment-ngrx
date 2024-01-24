import { Component } from '@angular/core';
import { ManageAccountStore } from '../../../store/manage-account.store';
import { AccountList } from '../../../model/manage-account.model';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrl: './manage-account.component.scss',
})
export class ManageAccountComponent {
  tableManageAccount$ = this.store.tableManageAccount$;
  loading$ = this.store.loading$;

  accountTypeList = [
    {
      text: 'Manager',
      value: 'Manager',
    },
    {
      text: 'Super Admin',
      value: 'Super Admin',
    },
    {
      text: 'Sale',
      value: 'Sale',
    },
    {
      text: 'Sale Supervisor',
      value: 'Sale Supervisor',
    },
    {
      text: 'Sale Manager',
      value: 'Sale Manager',
    },
    {
      text: 'Center',
      value: 'Center',
    },
    {
      text: 'Coordinate Manager',
      value: 'Coordinate Manager',
    },
    {
      text: 'Collector',
      value: 'Collector',
    },
    {
      text: 'Credit',
      value: 'Credit',
    },
    {
      text: 'Risk Manager',
      value: 'Risk Manager',
    },
    {
      text: 'Accounting',
      value: 'Accounting',
    },
    {
      text: 'Accounting Manager',
      value: 'Accounting Manager',
    },
  ];

  listOfColumns = [
    {
      name: 'accountId',
      label: 'รหัสพนักงาน',
      sortFn: (a: AccountList, b: AccountList) =>
        a.accountId.localeCompare(b.accountId),
      sortDirections: ['ascend', 'descend', null],
      sortOrder: 'descend',
      filter: false,
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false,
    },
    {
      name: 'accountFullName',
      label: 'ชื่อสมาชิก',
      sortFn: null,
      sortDirections: [null],
      sortOrder: null,
      filter: false,
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false,
    },
    {
      name: 'lastLogin',
      label: 'เข้าสู่ระบบล่าสุด',
      sortOrder: 'descend',
      sortFn: (a: AccountList, b: AccountList) => {
        const dateA = a['lastLogin'];
        const dateB = b['lastLogin'];

        if (dateA == null && dateB == null) {
          return 0; // both dates are null, treat as equal
        } else if (dateA == null) {
          return -1; // dateA is null, treat as less than dateB
        } else if (dateB == null) {
          return 1; // dateB is null, treat as less than dateA
        } else {
          return dateA.localeCompare(dateB);
        }
      },
      sortDirections: ['ascend', 'descend', null],
      filter: false,
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false,
    },
    {
      name: 'accountType',
      label: 'ประเภทพนักงาน',
      sortFn: null,
      sortDirections: [null],
      sortOrder: null,
      filter: true,
      listOfFilter: this.accountTypeList,
      filterFn: (accountType: string[], item: any) => {
        return accountType.some((type) => {
          return type === item.accountType;
        });
      },
      filterMultiple: true,
    },
    {
      name: 'detail',
      label: 'รายละเอียด',
      sortFn: null,
      sortDirections: [null],
      sortOrder: null,
      filter: false,
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false,
    },
  ];

  constructor(private store: ManageAccountStore) {
    this.store.getTableManageAccount('all');
  }
}
