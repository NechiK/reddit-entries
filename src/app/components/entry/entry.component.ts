import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() entry;
  @Input() isSingle = false;

  constructor() { }

  ngOnInit() {
  }

}
