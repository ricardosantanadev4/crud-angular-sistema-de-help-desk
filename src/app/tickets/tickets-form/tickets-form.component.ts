import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.scss']
})
export class TicketsFormComponent {
  form: FormGroup;

  constructor(private formBuild: FormBuilder, private ticketsService: TicketService
    , private _snackBar: MatSnackBar, private location: Location) {
    this.form = formBuild.group({
      // status: ['ABERTO'],
      // id: string;
      assunto: [null],
      categoria: [null],
      tecnico: [null],
      // nivel: [null],
      solicitante: [null],
      // criacao: [null],
      // urgencia: [null],
      // vencimento: [null],
    });
  }

  onSubmit() {
    // console.log(this.form.value);
    //  necessario se increver no observable para poder funcionar .subscribe()
    this.ticketsService.save(this.form.value).subscribe({
      next: result => { this.onSucess() }, error: error => { this.onError() }
    });
  }

  onCancel() {
    console.log('onCancel');
    this.location.back();
  }

  onSucess() {
    this._snackBar.open('Ticket salvo com sucesso', '', { duration: 2000 });
    this.onCancel();
  }

  onError() {
    this._snackBar.open('Erro ao salvar ticket', '', { duration: 2000 });
  }

  onBack() {
    this.location.back();
  }

}
