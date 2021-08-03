import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-two-way',
  templateUrl: './binding-two-way.component.html',
  styleUrls: ['./binding-two-way.component.scss']
})
export class BindingTwoWayComponent implements OnInit {
  public nom: string

  constructor() {
    this.nom = "";
  }

  ngOnInit(): void {
  }

}
