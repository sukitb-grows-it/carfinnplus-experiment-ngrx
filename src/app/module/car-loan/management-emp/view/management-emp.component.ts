import { Component } from '@angular/core';
import { TableEmployeeStore } from '../store/table-employee-mangement.store';
import { employee } from '../model/management-emp.model';

@Component({
  selector: 'app-management-emp',
  templateUrl: './management-emp.component.html',
  styleUrl: './management-emp.component.scss'
})
export class ManagementEmpComponent {

  tableEmployeesType$ = this.store.tableEmployeeType$
  loading$ = this.store.loading$

  listColumns = [
    {
      name: 'id',
      label: 'รหัสพนักงาน',
      sortFn: (a: employee, b: employee) => a.id.localeCompare(b.id),
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
      sortFn: (a: employee, b: employee) => a.dataLogin.getTime() - b.dataLogin.getTime(),
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
      sortDirections: [],
      sortOrder: null,
      filter: true,
      listOfFilter: [{ text: 'a', value: 'a' }, { text: 'b', value: 'a' }, { text: 'c', value: 'a' }],
      filterFn: (list: string[], item: employee) => list.some(name => item.roleEmployee.indexOf(name) !== -1),
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
  }
}
