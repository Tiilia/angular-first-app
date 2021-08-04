import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-comp',
  templateUrl: './direct-comp.component.html',
  styleUrls: ['./direct-comp.component.scss']
})
export class DirectCompComponent implements OnInit {

  public myColor: string;
  public leftOffset: number = 0;
  public myStyle: any = {
    color: "blue",
    "background-color": "pink"
  }

  constructor() {
    this.myColor = "#9966ff";
  }

  ngOnInit(): void {
  }

}
