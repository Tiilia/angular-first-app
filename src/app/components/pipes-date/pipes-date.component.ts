import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-date',
  templateUrl: './pipes-date.component.html',
  styleUrls: ['./pipes-date.component.scss']
})
export class PipesDateComponent implements OnInit {
  public get now() { return new Date(); }

  constructor() { }

  ngOnInit(): void {
  }

}
