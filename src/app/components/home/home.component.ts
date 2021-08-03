import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = "Bienvenu dans la démo"
  }

  ngOnInit(): void {
    setTimeout(() => this.title = "Que fais-tu encore là", 3000);
  }

}
