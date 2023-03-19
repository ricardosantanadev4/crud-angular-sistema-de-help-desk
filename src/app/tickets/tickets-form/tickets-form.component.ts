import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.scss']
})
export class TicketsFormComponent {
  form: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.form = formBuild.group({
      status: ['ABERTO'],
      // id: string;
      assunto: [null],
      categoria: [null],
      tecnico: [null],
      nivel: [null],
      solicitante: [null],
      criacao: [null],
      urgencia: [null],
      vencimento: [null],
    });
    
  }
}
