import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data-list',
  templateUrl: './parent-data-list.component.html',
  styleUrls: ['./parent-data-list.component.scss']
})
export class ParentDataListComponent implements OnInit {
  
  buttons = [{label:'Add', action: 'add'}, {label: 'Delete All', action: 'deleteAll'}, {label: 'Comment All', action: 'commentAll'}]
  dataToDisplay = [{name: 'abc', desc: 'xyz'}, {name: 'abc2', desc: 'xyz2'}]
  constructor(private service:DataService) { }
  
  ngOnInit(): void {
  }
  
  execAction(event: { data: { name: string; desc: string; }; action: string; }) {
    console.log(event)
    switch(event.action) {
      case 'add':
        console.log();
        break;
      case 'delete':
        break;
    }
  }
}
