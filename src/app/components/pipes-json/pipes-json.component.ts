import { Address } from './../../models/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-json',
  templateUrl: './pipes-json.component.html',
  styleUrls: ['./pipes-json.component.scss']
})
export class PipesJsonComponent implements OnInit {

  public address: Address;

  constructor() {
    this.address = {
      Numero: "250bis",
      Rue: "Avenue des cerisiers",
      Localite: "Charleroi",
      CodePostal: "BE6000",
      Pays: "Belgique"
    };
  }

  ngOnInit(): void {
  }

}