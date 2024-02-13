import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";
import { Observable } from "rxjs";

export abstract class TableSaleCarJobComponentModel {
    // store
    abstract tableSaleCarJobByJobType$: Observable<SaleCarJob[]>
    // method
    abstract onDateRangeChange(dateRange: Date[]): void
}

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

