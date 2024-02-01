import { NzTableFilterList } from 'ng-zorro-antd/table';
import { ColumnItem } from '../../table-sale-car-job/model/column-item.model';
import { ResolveFn } from '@angular/router';
import { SaleCarJob } from '../../table-sale-car-job/model/table-sale-car-job.model';
import { inject } from '@angular/core';
import { BankClient } from '../../../../core/client/bank/bank.client';
import { lastValueFrom } from 'rxjs';

export interface TableSaleCarJobResolver {
  listOfColumns: ColumnItem[];
}

export const tableCarJobResolver: ResolveFn<TableSaleCarJobResolver> = async (
  route,
  state,
) => {
  const listOfColumns = await initializeColumns();
  return {
    listOfColumns,
  };
};

const getBankFilterList = async (): Promise<NzTableFilterList> => {
  const bankFilterListSource$ = inject(BankClient).fetchBankTableFilterList();
  let bankFilterList = await lastValueFrom(bankFilterListSource$);

  return bankFilterList;
};

const getJobStatusFilterList = (): NzTableFilterList => {
  const jobStatusFilterList: NzTableFilterList = [
    { text: 'สมัครสินเชื่อ', value: 'สมัครสินเชื่อ', byDefault: false },
    { text: 'ส่งงานไฟแนนซ์', value: 'ส่งงานไฟแนนซ์', byDefault: false },
    { text: 'นัดเซ็นสัญญา', value: 'นัดเซ็นสัญญา', byDefault: false },
    { text: 'รอพิจารณา', value: 'รอพิจารณา', byDefault: false },
    { text: 'อนุมัติ', value: 'อนุมัติ', byDefault: false },
    { text: 'ไม่อนุมัติ', value: 'ไม่อนุมัติ', byDefault: false },
    { text: 'ส่งพิจารณาใหม่', value: 'ส่งพิจารณาใหม่', byDefault: false },
    { text: 'ยกเลิก', value: 'ยกเลิก', byDefault: false },
  ];
  return jobStatusFilterList;
};

const getLoanTypeFilterList = (): NzTableFilterList => {
  const loanTypeFilterList: NzTableFilterList = [
    { text: 'สินเชื่อจำนำเล่ม', value: 'สินเชื่อจำนำเล่ม', byDefault: false },
    {
      text: 'สินเชื่อรีไฟแนนซ์',
      value: 'สินเชื่อรีไฟแนนซ์',
      byDefault: false,
    },
    {
      text: 'สินเชื่อรถมือหนึ่ง',
      value: 'สินเชื่อรถมือหนึ่ง',
      byDefault: false,
    },
    {
      text: 'สินเชื่อซื้อ-ขายรถยนต์',
      value: 'สินเชื่อซื้อ-ขายรถยนต์',
      byDefault: false,
    },
  ];
  return loanTypeFilterList;
};

const getJobFromFilterList = (): NzTableFilterList => {
  const jobFromFilterList: NzTableFilterList = [
    { text: 'สายตรง', value: 'สายตรง' },
        { text: 'Call', value: 'Call' },
        { text: 'Facebook', value: 'Facebook' },
        { text: 'Line', value: 'Line' },
        { text: 'เว็บไซต์', value: 'เว็บไซต์' },
        { text: 'Partner', value: 'Partner' },
        { text: 'อื่นๆ', value: 'อื่นๆ' },
  ]
  return jobFromFilterList;
}



const initializeColumns = async (): Promise<ColumnItem[]> => {
  const listOfColumns: ColumnItem[] = [
    {
      name: 'id',
      label: 'เลขที่ขอกู้',
      sortFn: (a: SaleCarJob, b: SaleCarJob) => a.id.localeCompare(b.id),
      sortDirections: ['ascend', 'descend', null],
      sortOrder: 'descend',
      filter: true,
      listOfFilter: getLoanTypeFilterList(),
      filterFn: null,
      filterMultiple: true,
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
      filter: true,
      listOfFilter: await getBankFilterList(),
      filterFn: null,
      filterMultiple: true,
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
      filter: true,
      listOfFilter: getJobStatusFilterList(),
      filterFn: null,
      filterMultiple: true,
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
      filterMultiple: false,
    },
    {
      name: 'jobFrom',
      label: 'มาจาก',
      sortFn: null,
      sortDirections: [null],
      sortOrder: null,
      filter: false,
      listOfFilter: getJobFromFilterList(),
      filterFn: null,
      filterMultiple: false,
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
      filterMultiple: false,
    },
  ];
  return listOfColumns;
};
