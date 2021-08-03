import { BindingTwoWayComponent } from './components/binding-two-way/binding-two-way.component';
import { CoucouComponent } from './exemple/compenents/coucou/coucou.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BindingEventComponent } from './components/binding-event/binding-event.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent, children: [
      { path: 'coucou', component: CoucouComponent }
    ]
  },
  { path: "two-way", component: BindingTwoWayComponent },
  { path: "event", component: BindingEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
