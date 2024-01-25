import { Component } from '@angular/core';
import { TableEmployeeStore } from '../store/table-employee-mangement.store';
import { employee } from '../model/management-emp.model';
import { NzTableSortFn } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-management-emp',
  templateUrl: './management-emp.component.html',
  styleUrl: './management-emp.component.scss'
})
export class ManagementEmpComponent {

  tableEmployees$ = this.store.tableEmployees$
  loading$ = this.store.loading$

  accountType = [
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

  listColumns = [
    {
      name: 'id',
      label: 'รหัสพนักงาน',
      sortFn: (a: employee, b: employee) =>
        a.id.localeCompare(b.id),
      sortDirections: ['ascend', 'descend', null],
      sortOrder: 'descend',
      filter: false,
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false,
    },
    {
      name: 'name',
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
      name: 'date',
      label: 'เข้าระบบล่าสุด',
      sortFn: (a: employee, b: employee) => {
        const dateA = a.dataLogin || new Date(0);
        const dateB = b.dataLogin || new Date(0);
        return dateA.getTime() - dateB.getTime();
      },
      sortDirections: ['ascend', 'descend', null],
      sortOrder: 'descend',
      filter: false,
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false,
    },
    {
      name: 'type',
      label: 'ประเภทพนักงาน',
      sortFn: null,
      sortDirections: [null],
      sortOrder: null,
      filter: true,
      listOfFilter: this.accountType,
      filterFn: (list: string[], item: employee) => {
        return list.some(e => {
          return e === item.roleEmployee
        })
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
    }
  ]

  constructor(private store: TableEmployeeStore) {
    this.store.getTableEmployee('all')
  }
}
