import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";

export interface SaleCarJob {
    id: string;
    customerFullName: string;
    customerPhone: string;
    createdAt: Date;
    finance: string;
    loanType: string;
    status: string;
    createdDateUntilToday: number;
    sla: number;
    process: string;
    closedBy: string;
    updatedName: string;
    saleName: string;
    jobFrom: string;
    lastStatus: string;
}

export interface TableSaleCarJob {
    waitJob: SaleCarJob[];
    processJob: SaleCarJob[];
    doneJob: SaleCarJob[];
}

