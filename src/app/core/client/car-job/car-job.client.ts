import { Injectable } from '@angular/core';
import { TableSaleCarJob } from '../../../module/car-loan/table-sale-car-job/model/table-sale-car-job.model';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TableSaleCarJobAdapter } from './adapter/car-job.adapter';
import { TableSaleCarJobDTO } from './dto/car-job.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableSaleCarJobClient {
  URL = environment.apiUrl;
  ENDPOINT = '/carjobs';

  tableSaleCarJobAdapter = new TableSaleCarJobAdapter();

  constructor(private http: HttpClient) {}

  fetchTableSaleCarJob(
    dateStart: Date,
    dateEnd: Date,
  ): Observable<TableSaleCarJob> {
    let dateStartParam = '';
    let dateEndParam = '';
    if (dateStart || dateEnd) {
      dateStartParam = new Date(dateStart).toISOString();
      dateEndParam = new Date(dateEnd).toISOString();
    }

    return this.http
      .get<{
        status: string;
        data: TableSaleCarJobDTO;
      }>(
        `${this.URL}${this.ENDPOINT}/get_jobslistV2?date_send_from=${dateStartParam}&date_send_to=${dateEndParam}`,
      )
      .pipe(
        map((res) => {
          return this.tableSaleCarJobAdapter.adapt(res.data);
        }),
      );
  }
}
