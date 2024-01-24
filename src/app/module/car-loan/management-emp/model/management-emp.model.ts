export interface employee {
  id: string;
  employeeFullName: string;
  dataLogin: Date;
  roleEmployee: string;
}

export interface TableEmployee {
  employeeManage: employee[]
}
