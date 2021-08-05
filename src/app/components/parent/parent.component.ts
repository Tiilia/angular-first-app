import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public leNomDeMonEnfant: string = "Voici mon enfant";
  public products: any[] = [
    { title: "product 1", price: 2.5 },
    { title: "product 2", price: 5 },
    { title: "product 3", price: 25 },
  ]
  public total: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public addToTotal(price: number) {
    this.total += price;
  }

}
