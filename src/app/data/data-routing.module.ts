import { ParentDataListComponent } from './parent-data-list/parent-data-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes = [
  {
    path: "",
    component: ParentDataListComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DataRoutingModule { }
