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

  constructor(private formBuild: FormBuilder, private ticketsService: TicketService, private _snackBar: MatSnackBar) {
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
      next: result => console.log({ message: result }), error: error => {
        this.onError();
      }
    });
  }

  onCancel() {
    console.log('onCancel');
  }

  onError() {
    this._snackBar.open('Erro ao salvar ticket', '', { duration: 2000 });
  }

}
