import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs'

@Component({
  selector: 'app-parent-data-list',
  templateUrl: './parent-data-list.component.html',
  styleUrls: ['./parent-data-list.component.scss']
})
export class ParentDataListComponent implements OnInit {

  buttons = [{ label: 'Add', action: 'add' }, { label: 'Delete All', action: 'deleteAll' }, { label: 'Comment All', action: 'commentAll' }]
  dataToDisplay = [{ name: 'abc', desc: 'xyz' }, { name: 'abc2', desc: 'xyz2' }]
  constructor(private service: DataService) { }

  myData:string[]|any;
  datum:string[]|string|any

  ngOnInit(): void {

    //NO! - If you use this from service - you cannot use pipe nor can you 
    // subscribe anymore here in the list component
    //return of(this.data).pipe().subscribe(data => console.log(data))

    this.myData = this.service.getData().pipe(
      map(x => {
        for(let a of x) {
          return a + '_code'
        }
        return x
      })
    ).subscribe(data => (this.datum = data))

  }

  execAction(event: { data: { name: string; desc: string; }; action: string; }) {
    console.log(event)
    switch (event.action) {
      case 'add':
        console.log();
        break;
      case 'delete':
        break;
    }
  }
}
