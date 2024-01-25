import { TableEmployee, employee } from "../../model/management-emp.model";
import { ManageAccountDTO, TableManageAccountDTO } from "../dto/table-management-account.dto";


export class TableManageAccountAdapter {
  private adaptBaseJob(job: ManageAccountDTO): employee {
    const result = {
      id: job.account_id,
      employeeFullName: `${job.name ?? ''} ${job.surname ?? ''}`,
      dataLogin: new Date(job.datetime_last_login ?? ''),
      roleEmployee: job.role_group
    }

    return result;
  }

  public adapt(dto: TableManageAccountDTO): TableEmployee {
    const employeeManage = dto.list.map((job: ManageAccountDTO) => this.adaptBaseJob(job))
    return { employeeManage }

  }
}
