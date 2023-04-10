import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Despesa } from '../modelo/despesa';
import { DespesasService } from '../services/despesas.service';

@Injectable({
  providedIn: 'root',
})
export class DespesaResolver implements Resolve<Despesa> {
  constructor(private service: DespesasService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Despesa> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', name: '', category: '', price: 1 });
  }
}
