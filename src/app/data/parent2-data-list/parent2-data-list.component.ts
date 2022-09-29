import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2-data-list',
  templateUrl: './parent2-data-list.component.html',
  styleUrls: ['./parent2-data-list.component.scss']
})
export class Parent2DataListComponent implements OnInit {

  // label, action, class
  buttons = [{label:'Add', action: 'add'}, {label: 'Delete All', action: 'deleteAll'}, {label: 'Comment All', action: 'commentAll'}]
  constructor() { }

  ngOnInit(): void {
  }

  execAction(event: { data: { name: string; desc: string; }; action: string; }) {
    switch(event.action) {
      case 'add':
        //this.service.
        break;
      case 'delete':
        break;

      case 'commentAll':
        break;
      
    }
  }

}
