import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})


export class EnfantComponent implements OnInit {

  @Input() monNom?: string;
  @Input() product: any;

  @Output() onBeBuy: EventEmitter<number>;
  constructor() {
    this.onBeBuy = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public buyProduct() {
    this.onBeBuy.emit(this.product.price);
  }

}
