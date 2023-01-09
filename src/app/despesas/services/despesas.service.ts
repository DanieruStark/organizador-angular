import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesa } from '../modelo/despesa';
@Injectable({
  providedIn: 'root',
})
export class DespesasService {
  private readonly API = '/assets/despesas.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Despesa[]>(this.API);
  }
}
