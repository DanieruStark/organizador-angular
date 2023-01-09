import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Despesa } from '../modelo/despesa';
import { DespesasService } from '../services/despesas.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss'],
})
export class DespesasComponent {
  despesas$: Observable<Despesa[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private despesasService: DespesasService, public dialog: MatDialog) {
    this.despesas$ = this.despesasService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar despesas');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
