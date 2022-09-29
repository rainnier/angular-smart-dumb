import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @Input() buttons:any = [];

  @Output() actionEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  execAction(data:any) {
    this.actionEmitter.emit(data);
  }

}
