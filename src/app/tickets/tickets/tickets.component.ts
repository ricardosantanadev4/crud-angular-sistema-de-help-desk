import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Tickets } from '../model/tickets';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  // dataSource$: Tickets[] = [{ status: 'Aberto', id: '1', assunto: 'Softphone - Instalar,Configuração', categoria: 'Dispositivo', tecnico: 'Suporte Técnico - 01', nivel: 'Nível 1', solicitante: 'helpdesk@rsds.com.br', criacao: '07/02/2023', urgencia: 'Baixa', vencimento: '10/02/2023 10:20' }];
  dataSource$: Observable<Tickets[]>;
  displayedColumns = ['flag', 'status', 'id', 'assunto', 'categoria', 'tecnico', 'nivel', 'solicitante', 'criacao', 'urgencia', 'vencimento', 'actions']

  constructor(private ticketService: TicketService, public dialog: MatDialog, private router: Router) {
    this.dataSource$ = ticketService.getTickets().pipe(
      catchError(
        error => {
          this.openDialog('Erro ao carregar recursos.')
          return of([])
        }
      )
    )
  }
  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    console.log('onAdd'),
      this.router.navigate(['tickets/new'])
  }
}