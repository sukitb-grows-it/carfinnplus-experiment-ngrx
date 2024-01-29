import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NzTableFilterList } from 'ng-zorro-antd/table';
import { BankDTO } from './dto/bank.dto';
import { BankAdaptor } from './adapter/bank.adapter';

@Injectable({
  providedIn: 'root'
})
export class BankClient {

  URL = environment.apiUrl;
  ENDPOINT = '/bank';

  bankAdaptor = new BankAdaptor();

  constructor(private http: HttpClient) {}

  fetchBankTableFilterList(): Observable<NzTableFilterList> {
    return this.http.get<BankDTO>(
      this.URL + this.ENDPOINT + '/get_bank'
    ).pipe(
      map((dto) => {
        return this.bankAdaptor.adaptToTableFilterList(dto.data);
      })
    )
  }

}
