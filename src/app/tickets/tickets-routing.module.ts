import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsFormComponent } from './tickets-form/tickets-form.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path:'',component: TicketsComponent},
  {path:'new',component: TicketsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
