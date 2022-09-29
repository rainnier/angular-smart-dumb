import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-data-item',
  templateUrl: './child-data-item.component.html',
  styleUrls: ['./child-data-item.component.scss']
})


export class ChildDataItemComponent implements OnInit {

  @Input()
  dataToDisplay:any = {}

  @Output()
  actionEmitter = new EventEmitter<{ data: { name: string, desc: string }, action: string }>()

  constructor() { }

  ngOnInit(): void {
  }

  execAction(data: { name: string, desc: string }, action: string) {
    this.actionEmitter.emit({ data, action });
  }

}
