import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { TableManageAccountDTO } from "./dto/table-management-account.dto";
import { NzTableContentComponent } from "ng-zorro-antd/table";
import { TableManageAccountAdapter } from "./adapter/table-management-account.adapter";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class TableEmployeeClient {
  URL = environment.apiUrl;
  ENDPOINT = '/account'

  tableManageAccountAdaper = new TableManageAccountAdapter();

  constructor(private http: HttpClient) { }

  fetchTableManagementAccount() {
    return this.http.get<{
      status: string,
      data: TableManageAccountDTO
    }>(
      `${this.URL}${this.ENDPOINT}/get_accountlist?account_type=all`
    ).pipe(
      map((res) => {
        return this.tableManageAccountAdaper.adapt(res.data)
      }))
  }
}