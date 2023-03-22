import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Tickets } from '../model/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  // dataSource: Tickets[] = [{ status: 'Aberto', id: '1', assunto: 'Softphone - Instalar,Configuração', categoria: 'Dispositivo', tecnico: 'Suporte Técnico - 01', nivel: 'Nível 1', solicitante: 'helpdesk@rsds.com.br', criacao: '07/02/2023', urgencia: 'Baixa', vencimento: '10/02/2023 10:20' }];
  // private readonly API = 'http://localhost:3000/values';
  private readonly API = '/api/Tickets-list';

  constructor(private httpClient: HttpClient) { }

  getTickets() {
    return this.httpClient.get<Tickets[]>(this.API).pipe(
      tap(tickets => console.log(tickets)),
      // se inscreve no observable e assim que receber a primeira resposta se desinscreve do oservable
      first(),
      delay(2000)
    );
  }

  save(record: Tickets) {
    return this.httpClient.post<Tickets>(this.API, record);
  }

}
