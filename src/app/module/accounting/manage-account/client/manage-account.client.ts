import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable, map } from 'rxjs';
import { TableAccountListDTO } from './dto/manage-account.dto';
import { TableAccoutList } from '../model/manage-account.model';
import { TableManageAccountAdapter } from './adapter/manage-account.adapter';

@Injectable({
  providedIn: 'root',
})
export class TableManageAccountClient {
  TableManageAccountAdapter = new TableManageAccountAdapter();

  constructor(private http: HttpClient) {}

  fetchTableManageAccount(account_type: string): Observable<TableAccoutList> {
    return this.http
      .get<{
        status: string;
        data: TableAccountListDTO;
      }>(
        `http://52.74.97.249:5100/carfinn/v1/account/get_accountlist?account_type=${account_type}`,
      )
      .pipe(
        map((res) => {
          return this.TableManageAccountAdapter.adapt(res.data);
        }),
      );
  }
}
