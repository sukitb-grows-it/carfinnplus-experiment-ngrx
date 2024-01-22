import { Injectable } from '@angular/core';
import { TableSaleCarJob } from '../model/table-sale-car-job.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, map, switchMap, tap } from 'rxjs';
import { TableSaleCarJobClient } from '../client/table-sale-car-job.client';

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
};

@Injectable({
  providedIn: 'root',
})
export class TableSaleCarJobPageStore extends ComponentStore<TableSaleCarJobPageState> {
  constructor(private tableSaleCarJobClient: TableSaleCarJobClient) {
    super(initialTableSaleCarJobPageStateState);
  }

  // selector
  readonly tableSaleCarJob$ = this.select((state) => state.tableSaleCarJob);
  readonly selectJobType$ = this.select((state) => state.selectJobType);
  readonly dateRange$ = this.select((state) => state.dateRange);
  readonly searchTerm$ = this.select((state) => state.searchTerm);
  readonly loading$ = this.select((state) => state.loading);

  // setter
  setSelectJobType = this.updater((state, newValue: JobType) => ({
    ...state,
    selectJobType: newValue,
  }));
  setDateRange = this.updater((state, newValue: Date[]) => ({
    ...state,
    dateRange: newValue,
  }));
  setSearchTerm = this.updater((state, newValue: string) => ({
    ...state,
    searchTerm: newValue,
  }));

  // customize selector เพราะเราไม่ได้ต้องการนำงานทั้งหมดไปแสดง แต่เราจะหยิบเฉพาะที่ user ทำการกดปุ่ม select เท่านั้น
  readonly tableSaleCarJobByJobType$ = this.select(
    this.tableSaleCarJob$,
    this.selectJobType$,
    (tableSaleCarJob, selectedJobType) => {
      switch (selectedJobType) {
        case JobType.WaitJob:
          return tableSaleCarJob.waitJob;
        case JobType.ProcessJob:
          return tableSaleCarJob.processJob;
        case JobType.DoneJob:
          return tableSaleCarJob.doneJob;
      }
    },
  );

  // effect: call api เมื่อ date-range เปลี่ยน
  getTableSaleCarJob = this.effect<Date[]>((dateRange$: Observable<Date[]>) => {
    return dateRange$.pipe(
      tap(() => this.patchState({ loading: true })),
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
}
