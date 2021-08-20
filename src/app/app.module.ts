import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import {ListComponent} from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';


@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
