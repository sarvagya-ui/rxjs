import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalComponent } from './interval/interval.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './of-from/of-from.component';

const routes: Routes = [
  {path:'observable',component:ObservableComponent , children:[
    {path:'',component:ListComponent},
    {path:'fromevent',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'offrom',component:OfFromComponent}
  ]},
  {path :'**',redirectTo:'observable'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
