import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoucouComponent } from './compenents/coucou/coucou.component';



@NgModule({
  declarations: [
    CoucouComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CoucouComponent
  ]
})
export class ExempleModule { }
