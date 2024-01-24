import { AccountList, TableAccoutList } from '../../model/manage-account.model';
import { AccountListDTO, TableAccountListDTO } from '../dto/manage-account.dto';

export class TableManageAccountAdapter {
  private adaptAccount(user: AccountListDTO): AccountList {
    const result = {
      accountId: user.account_id,
      accountFullName: `${user.name ?? ''} ${user.surname ?? ''}`,
      lastLogin: user.datetime_last_login,
      accountType: user.account_role,
    };

    return result;
  }

  public adapt(dto: TableAccountListDTO): TableAccoutList {
    const allAccount = dto.list.map((job: AccountListDTO) => this.adaptAccount(job));

    return {
        allAccount
    }
}
}
