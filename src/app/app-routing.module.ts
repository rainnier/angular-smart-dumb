import { DataModule } from './data/data.module';
import { ParentDataListComponent } from './data/parent-data-list/parent-data-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
  {
    path: "",
    redirectTo: "data",
    pathMatch: "full"
  },
  {
    path: "data",
    loadChildren: () => import('./data/data.module').then(m => m.DataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
