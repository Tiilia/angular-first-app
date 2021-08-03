import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-attribute',
  templateUrl: './binding-attribute.component.html',
  styleUrls: ['./binding-attribute.component.scss']
})
export class BindingAttributeComponent implements OnInit {
  public stateText: string;
  public state: boolean;

  constructor() {
    this.stateText = "On";
    this.state = true;
  }

  ngOnInit(): void {
  }

  public switchBtn() {
    this.stateText = (this.stateText === "On") ? "Off" : "On";
  }

}
