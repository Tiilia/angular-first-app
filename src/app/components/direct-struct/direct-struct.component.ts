import { Address } from './../../models/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-struct',
  templateUrl: './direct-struct.component.html',
  styleUrls: ['./direct-struct.component.scss']
})
export class DirectStructComponent implements OnInit {

  public show: boolean = false;

  public addresses: Address[] = [];
  public pizza: string = "";

  constructor() {
    this.addresses.push({
      Numero: "15",
      Rue: "Avenue des oliviers",
      Localite: "Bruxelles",
      CodePostal: "BE1000",
      Pays: "Belgique"
    })
    this.addresses.push({
      Numero: "150",
      Rue: "Avenue des ponchos",
      Localite: "Anvers",
      CodePostal: "BE7000",
      Pays: "Belgique"
    })
    this.addresses.push({
      Numero: "250",
      Rue: "Boulevard des ponchos",
      Localite: "Tournai",
      CodePostal: "BE4500",
      Pays: "Belgique"
    })
    this.addresses.push({
      Numero: "350",
      Rue: "Boulevard des cerisiers",
      Localite: "Liège",
      CodePostal: "BE4000",
      Pays: "Belgique"
    })

  }

  ngOnInit(): void {
  }

}