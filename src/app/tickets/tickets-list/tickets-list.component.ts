import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tickets } from '../model/tickets';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent {
  @Input() ticketsList: Tickets[] = [];
  @Output() eventTicketList = new EventEmitter(false);

  readonly displayedColumns = ['flag', 'status', 'id', 'assunto', 'categoria', 'tecnico', 'nivel', 'solicitante', 'criacao', 'urgencia', 'vencimento', 'actions'];

  constructor() { }

  onAddTicketList() {
    console.log('onAddTicketList');
    this.eventTicketList.emit(true);
  }
}
