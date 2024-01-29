import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSearchBoxComponent } from './components/table-search-box/table-search-box.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzEmptyModule } from 'ng-zorro-antd/empty';


const nzModule = [
  NzInputModule,
  NzIconModule,
  NzTableModule,
  NzDatePickerModule,
  NzButtonModule,
  NzRadioModule,
  NzEmptyModule
]

@NgModule({
  declarations: [
    TableSearchBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...nzModule
  ],
  exports: [
    ...nzModule,
    FormsModule,
    TableSearchBoxComponent
  ]
})
export class SharedModule { }
