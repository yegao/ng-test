import { Component, OnInit } from '@angular/core';

const overviews: Overview[] = [{title: "项目启动", status: 0}, {title: "灰度测试", status: 2}, {title: "召开会议", status: 1}]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  overviews: Overview[] = overviews;
  onAdd() {
    this.overviews.push({title:"新增的任务", status: 0});
  }
  constructor() { }

  ngOnInit() {
  }

}
