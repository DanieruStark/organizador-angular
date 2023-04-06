import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DespesasService } from '../../services/despesas.service';

@Component({
  selector: 'app-despesas-form',
  templateUrl: './despesas-form.component.html',
  styleUrls: ['./despesas-form.component.scss'],
})
export class DespesasFormComponent {
  form = this.formBuilder.group({
    name: [''],
    category: [''],
    price: [0],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: DespesasService,
    private snackBar: MatSnackBar,
    private locaiton: Location
  ) {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      () => this.onSucess(),
      () => this.onError()
    );
  }

  onCancel() {
    this.locaiton.back();
  }

  onSucess(){
    this.snackBar.open('Despesa salva com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar a despesa', '', { duration: 3000 });
  }
}
