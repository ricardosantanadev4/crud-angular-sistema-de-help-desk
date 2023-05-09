import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.scss']
})
export class TicketsFormComponent {
  ticketsForm = this.formBuilder.group({
    // status: ['ABERTO'],
    // id: string;
    assunto: [''],
    categoria: [''],
    tecnico: [''],
    // nivel: [''],
    solicitante: [''],
    // criacao: [''],
    // urgencia: [''],
    // vencimento: [''],
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private formBuilder: NonNullableFormBuilder, private ticketsService: TicketService
    , private _snackBar: MatSnackBar, private location: Location) {

  }

  onSubmit() {
    // console.log(this.form.value);
    //  necessario se increver no observable para poder funcionar .subscribe()
    this.ticketsService.save(this.ticketsForm.value).subscribe({
      next: () => { this.onSucess('Ticket salvo com sucesso') },
      error: () => { this.onError('Erro ao salvar ticket') }
    });
  }

  onCancel() {
    console.log('onCancel');
    this.location.back();
  }

  onSucess(message: string) {
    this.snackBarPosition(message);
    this.onCancel();
  }

  onError(message: string) {
    this.snackBarPosition(message);
  }

  snackBarPosition(message: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }

  onBack() {
    this.location.back();
  }

}
