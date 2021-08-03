import { ExempleModule } from './exemple/exemple.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BindingTwoWayComponent } from './components/binding-two-way/binding-two-way.component';
import { FormsModule } from '@angular/forms';
import { BindingEventComponent } from './components/binding-event/binding-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BindingTwoWayComponent,
    BindingEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ExempleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
