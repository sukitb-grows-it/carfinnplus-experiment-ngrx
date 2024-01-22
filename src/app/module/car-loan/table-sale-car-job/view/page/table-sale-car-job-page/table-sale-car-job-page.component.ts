import { Component } from '@angular/core';
import { JobType, TableSaleCarJobPageStore } from '../../../store/table-sale-car-job-page.store';
import { SaleCarJob } from '../../../model/table-sale-car-job.model';

@Component({
  selector: 'app-table-sale-car-job-page',
  templateUrl: './table-sale-car-job-page.component.html',
  styleUrl: './table-sale-car-job-page.component.scss'
})
export class TableSaleCarJobPageComponent {

  tableSaleCarJobByJobType$ = this.store.tableSaleCarJobByJobType$;
  selectJobType$ = this.store.selectJobType$;
  dateRange$ = this.store.dateRange$;
  loading$ = this.store.loading$;

  jobTypeSelection = {
    waitJob: JobType.WaitJob,
    processJob: JobType.ProcessJob,
    doneJob: JobType.DoneJob,
  }

  listOfColumns = [
    {
        name: 'id',
        label: 'เลขที่ขอกู้',
        sortFn: (a: SaleCarJob, b: SaleCarJob) => a.id.localeCompare(b.id),
        sortDirections: ['ascend', 'descend', null],
        sortOrder: 'descend',
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'name',
        label: 'ชื่อ-นามสกุล',
        sortFn: (a: SaleCarJob, b: SaleCarJob) =>
            a.customerFullName.localeCompare(b.customerFullName),
        sortDirections: ['ascend', 'descend', null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'customerPhone',
        label: 'เบอร์โทรศัพท์',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'createdAt',
        label: 'วันที่ขอกู้',
        sortFn: (a: SaleCarJob, b: SaleCarJob) =>
            a.createdAt.getTime() - b.createdAt.getTime(),
        sortDirections: ['ascend', 'descend', null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'finance',
        label: 'ไฟแนนซ์',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'loanType',
        label: 'ประเภทสินเชื่อ',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'status',
        label: 'สถานะ',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'createdDateUntilToday',
        label: 'วันที่ขอกู้ถึงปัจจุบัน',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'sla',
        label: 'SLA',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'process',
        label: 'ขั้นตอน',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'closedBy',
        label: 'ปิดโดย',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false,
    },
    {
        name: 'updatedName',
        label: 'อัพเดทโดย',
        sortFn: null,
        sortDirections: [null],
        filterMultiple: false,
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,

    },
    {
        name: 'saleName',
        label: 'พนักงานขาย',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false
    },
    {
        name: 'jobFrom',
        label: 'มาจาก',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false
    },
    {
        name: 'lastStatus',
        label: 'สถานะล่าสุดก่อนยกเลิก',
        sortFn: null,
        sortDirections: [null],
        sortOrder: null,
        filter: false,
        listOfFilter: [],
        filterFn: null,
        filterMultiple: false
    },
];

  constructor(private store: TableSaleCarJobPageStore) {
    this.store.getTableSaleCarJob([])
    this.store.setSelectJobType(JobType.WaitJob)
  }

  onDateRangeChange(dateRange: Date[]): void {
    this.store.setDateRange(dateRange)
    this.store.getTableSaleCarJob(dateRange)
  }

  onSelectJobTypeChange(jobType: JobType): void {
    this.store.setSelectJobType(jobType)
  }

}
