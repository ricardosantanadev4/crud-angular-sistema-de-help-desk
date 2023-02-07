import { Component } from '@angular/core';
import { Tickets } from '../model/tickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  dataSource: Tickets[] = [{ status: '', id: '', assunto: '', categoria: '', tecnico: '', nivel: '', solicitante: '', criacao: '', urgencia: '', vencimento: '' }];
  displayedColumns = ['status', 'id', 'assunto', 'categoria', 'tecnico', 'nivel', 'solicitante', 'criacao', 'urgencia', 'vencimento']
}
