import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coucou',
  templateUrl: './coucou.component.html',
  styleUrls: ['./coucou.component.scss', './coucou.p.compenent.scss']
})
export class CoucouComponent implements OnInit, OnDestroy {

  constructor() {
    console.warn('Je me consutruit');

  }
  ngOnDestroy(): void {
    console.error('Je meurs...');
  }

  ngOnInit(): void {
    console.log("Youpie je suis en vie!");

  }

}
