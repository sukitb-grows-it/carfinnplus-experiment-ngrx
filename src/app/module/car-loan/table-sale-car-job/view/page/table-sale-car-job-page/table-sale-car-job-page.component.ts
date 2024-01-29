import { Component } from '@angular/core';
import { JobType, TableSaleCarJobPageStore } from '../../../store/table-sale-car-job-page.store';
import { SaleCarJob } from '../../../model/table-sale-car-job.model';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { ColumnItem } from '../../../model/column-item.model';
import { ActivatedRoute } from '@angular/router';

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
  searchTerm$ = this.store.searchTerm$;
  bankFilterList$ = this.store.bankFilterList$;
  bankFilterList: NzTableFilterList = []

  listOfColumns: ColumnItem[] = []

  jobTypeSelection = {
    waitJob: JobType.WaitJob,
    processJob: JobType.ProcessJob,
    doneJob: JobType.DoneJob,
  }

  constructor(private store: TableSaleCarJobPageStore, private activateRoute: ActivatedRoute) {
    this.store.getTableSaleCarJob([])
    this.store.setSelectJobType(JobType.WaitJob)
    this.store.getFilterList()
    this.activateRoute.data.subscribe(
      ({ pageConfig}) => {
        console.log(pageConfig)
        this.listOfColumns = pageConfig.listOfColumns
      }
    )
  }

  onDateRangeChange(dateRange: Date[]): void {
    this.store.setDateRange(dateRange)
    this.store.getTableSaleCarJob(dateRange)
  }

  onSelectJobTypeChange(jobType: JobType): void {
    this.store.setSelectJobType(jobType)
  }

  handleSearchTermChange(searchTerm: string): void {
    console.log(searchTerm)
    this.store.setSearchTerm(searchTerm)
  }

}
