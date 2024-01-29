import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";
import { SaleCarJob } from "./table-sale-car-job.model";

export interface ColumnItem {
    name: string;
    label: string;
    sortOrder: NzTableSortOrder | null;
    sortDirections: (string | null)[];
    sortFn: NzTableSortFn<SaleCarJob> | null;
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn<SaleCarJob> | null;
    filter: boolean
    filterMultiple: boolean
  }
