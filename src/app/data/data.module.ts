import { DataRoutingModule } from './data-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentDataListComponent } from './parent-data-list/parent-data-list.component';
import { ChildDataItemComponent } from './child-data-item/child-data-item.component';
import { Parent2DataListComponent } from './parent2-data-list/parent2-data-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ParentDataListComponent,
    ChildDataItemComponent,
    Parent2DataListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataRoutingModule
  ]
})
export class DataModule { }
