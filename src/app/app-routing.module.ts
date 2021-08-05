import { ShopComponent } from './components/shop/shop.component';
import { ParentComponent } from './components/parent/parent.component';
import { DirectStructComponent } from './components/direct-struct/direct-struct.component';
import { DirectCompComponent } from './components/direct-comp/direct-comp.component';
import { PipesJsonComponent } from './components/pipes-json/pipes-json.component';
import { BindingTwoWayComponent } from './components/binding-two-way/binding-two-way.component';
import { CoucouComponent } from './exemple/compenents/coucou/coucou.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BindingEventComponent } from './components/binding-event/binding-event.component';
import { BindingAttributeComponent } from './components/binding-attribute/binding-attribute.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent, children: [
      { path: 'coucou', component: CoucouComponent }
    ]
  },
  { path: "two-way", component: BindingTwoWayComponent },
  { path: "event", component: BindingEventComponent },
  { path: "attribute", component: BindingAttributeComponent },
  { path: "pipe-json", component: PipesJsonComponent },
  { path: "direct-comp", component: DirectCompComponent },
  { path: "direct-struct", component: DirectStructComponent },
  { path: "input-output", component: ParentComponent },
  { path: "shop", component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
