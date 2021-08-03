import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styleUrls: ['./binding-event.component.scss']
})
export class BindingEventComponent implements OnInit {

  public cpt: number;

  constructor() {
    this.cpt = 0;
  }

  ngOnInit(): void {
  }

  public addOne() {
    this.cpt++;
  }

}
