import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Despesa } from '../../modelo/despesa';
import { DespesasService } from '../../services/despesas.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss'],
})
export class DespesasComponent {
  despesas$!: Observable<Despesa[]>;

  constructor(
    private despesasService: DespesasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.despesas$ = this.despesasService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar despesas');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  onEdit(despesa: Despesa) {
    this.router.navigate(['edit', despesa._id], { relativeTo: this.route });
  }

  onRemove(despesa: Despesa) {
    this.despesasService.remove(despesa._id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Despesa removida com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
      () => this.onError('Erro ao tentar remover curso.')
    );
  }
}
