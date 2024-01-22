import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-table-search-box',
  templateUrl: './table-search-box.component.html',
  styleUrl: './table-search-box.component.scss'
})
export class TableSearchBoxComponent {
  @Input() searchTerm!: string;
  @Input() dateRange!: Date[] | [];
  @Output() searchTermChange = new EventEmitter<string>()
  @Output() dateRangeChange = new EventEmitter<Date[]>()

  onSearchTermChange(): void {
    this.searchTermChange.emit(this.searchTerm)
  }

  onDateRangeChange(): void {
    this.dateRangeChange.emit(this.dateRange)
  }
}
