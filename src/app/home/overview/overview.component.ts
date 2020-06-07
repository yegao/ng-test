import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() overview: Overview;
  @Output() add = new EventEmitter();

  keyup($event) {
    if($event.keyCode === 13){
      console.log("enter");
      this.add.emit();
    }
  }
  constructor() { }

  ngOnInit() {
  }
}
