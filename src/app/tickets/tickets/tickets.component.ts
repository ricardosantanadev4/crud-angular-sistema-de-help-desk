import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Tickets } from '../model/tickets';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  // dataSource: Tickets[] = [{ status: 'Aberto', id: '1', assunto: 'Softphone - Instalar,Configuração', categoria: 'Dispositivo', tecnico: 'Suporte Técnico - 01', nivel: 'Nível 1', solicitante: 'helpdesk@rsds.com.br', criacao: '07/02/2023', urgencia: 'Baixa', vencimento: '10/02/2023 10:20' }];
  dataSource: Observable<Tickets[]>;
  displayedColumns = ['status', 'id', 'assunto', 'categoria', 'tecnico', 'nivel', 'solicitante', 'criacao', 'urgencia', 'vencimento']

  constructor(private ticketService: TicketService) {
    this.dataSource = ticketService.getTickets().pipe(
      tap(tickets => console.log(tickets))
    );
  }
}