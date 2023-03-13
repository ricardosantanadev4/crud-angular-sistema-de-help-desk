import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { TicketsFormComponent } from './tickets-form/tickets-form.component';


@NgModule({
  declarations: [
    TicketsComponent,
    TicketsFormComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class TicketsModule { }
