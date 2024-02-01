import { SaleCarJob } from './../model/table-sale-car-job.model';
import { Injectable } from '@angular/core';
import { TableSaleCarJob } from '../model/table-sale-car-job.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, exhaustMap, map, switchMap, tap } from 'rxjs';
import { TableSaleCarJobClient } from '../../../../core/client/car-job/car-job.client';
import { NzTableFilterList } from 'ng-zorro-antd/table';
import { BankClient } from '../../../../core/client/bank/bank.client';

// ประกาศ interface ว่า state ที่เราจะใช้ใน component หน้าตาเป็นแบบไหน
// ตาม ui-design ของ component นี้ต้องมีข้อมูล งานทั้งหมดแบ่งตามประเภท, คำ search, วันที่ต้องการค้นหา, ค่าของปุ่ม select
// เราเลยจะเก็บ state ที่มี interface ดังนี้

export enum JobType {
  WaitJob = 'waitJob',
  ProcessJob = 'processJob',
  DoneJob = 'doneJob',
}

export interface TableSaleCarJobPageState {
  tableSaleCarJob: TableSaleCarJob;
  searchTerm: string;
  selectJobType: JobType;
  dateRange: Date[];
  loading: boolean;
  filterList: {
    bankFilterList: NzTableFilterList;
  }
}

// state เริ่มต้นของ store นี้
const initialTableSaleCarJobPageStateState: TableSaleCarJobPageState = {
  tableSaleCarJob: {
    waitJob: [],
    processJob: [],
    doneJob: [],
  },
  searchTerm: '',
  selectJobType: JobType.WaitJob,
  dateRange: [],
  loading: false,
  filterList: {
    bankFilterList: []
  }
};

@Injectable({
  providedIn: 'root',
})
export class TableSaleCarJobPageStore extends ComponentStore<TableSaleCarJobPageState> {
  constructor(private tableSaleCarJobClient: TableSaleCarJobClient, private bankClient: BankClient) {
    super(initialTableSaleCarJobPageStateState);
    this.getFilterList()
  }

  // selector
  readonly tableSaleCarJob$ = this.select((state) => state.tableSaleCarJob);
  readonly selectJobType$ = this.select((state) => state.selectJobType);
  readonly dateRange$ = this.select((state) => state.dateRange);
  readonly searchTerm$ = this.select((state) => state.searchTerm);
  readonly loading$ = this.select((state) => state.loading);
  readonly filterList$ = this.select((state) => state.filterList);

  // setter
  setSelectJobType = this.updater((state, newValue: JobType) => ({
    ...state,
    selectJobType: newValue,
  }));
  setDateRange = this.updater((state, newValue: Date[]) => ({
    ...state,
    dateRange: newValue,
  }));
  setSearchTerm = this.updater((state, newValue: string) => {
    return {
      ...state,
      searchTerm: newValue,
    }
  })

  searchedTableSaleCarJob$ = this.select(
    this.tableSaleCarJob$,
    this.searchTerm$,
    (tableSaleCarJob, searchTerm) => {
      if (!searchTerm) {
        return tableSaleCarJob;
      }
      const waitJob = tableSaleCarJob.waitJob.filter((job) =>
        this.searchCarJob(job, searchTerm)
      )
      const processJob = tableSaleCarJob.processJob.filter((job) =>
        this.searchCarJob(job, searchTerm)
      )
      const doneJob = tableSaleCarJob.doneJob.filter((job) =>
        this.searchCarJob(job, searchTerm)
      )

      return {
        waitJob,
        processJob,
        doneJob,
      }
    }
  )

  // customize selector เพราะเราไม่ได้ต้องการนำงานทั้งหมดไปแสดง แต่เราจะหยิบเฉพาะที่ user ทำการกดปุ่ม select เท่านั้น
  readonly tableSaleCarJobByJobType$ = this.select(
    this.searchedTableSaleCarJob$,
    this.selectJobType$,
    (searchedTableSaleCarJob, selectedJobType) => {
      switch (selectedJobType) {
        case JobType.WaitJob:
          return searchedTableSaleCarJob.waitJob;
        case JobType.ProcessJob:
          return searchedTableSaleCarJob.processJob;
        case JobType.DoneJob:
          return searchedTableSaleCarJob.doneJob;
      }
    },
  );

  readonly bankFilterList$ = this.select(this.filterList$, (filterList) => filterList.bankFilterList)

  // effect: call api เมื่อ date-range เปลี่ยน
  getTableSaleCarJob = this.effect<Date[]>((dateRange$: Observable<Date[]>) => {
    return dateRange$.pipe(
      tap(() => this.patchState({ loading: true })),
      tap(() => this.patchState({ tableSaleCarJob: initialTableSaleCarJobPageStateState.tableSaleCarJob })),
      switchMap((dataRange) =>
        this.tableSaleCarJobClient
          .fetchTableSaleCarJob(dataRange[0], dataRange[1])
          .pipe(
            tapResponse(
              (tableSaleCarJob) => {
                this.patchState({ tableSaleCarJob });
              },
              (error) => {
                console.log(error);
              },
              () => this.patchState({ loading: false }),
            ),
          ),
      ),
    );
  });

  getFilterList = this.effect<void>((trigger$) => trigger$.pipe(
    exhaustMap(() => 
      this.bankClient.fetchBankTableFilterList().pipe(
        tapResponse(
          (filterList) => {
            this.patchState({ filterList: { bankFilterList: filterList } });
          },
          (error) => {
            console.log(error);
          },
        )
      )
    )
  ))

  // util-region //
  searchCarJob(saleCarJobs: SaleCarJob, searchTerm: string) {
    const checkedFullName = saleCarJobs.customerFullName.toLowerCase().includes(searchTerm.toLowerCase());
    const checkedPhone = saleCarJobs.customerPhone.toLowerCase().includes(searchTerm.toLowerCase());

    return checkedFullName || checkedPhone;
  }
}
