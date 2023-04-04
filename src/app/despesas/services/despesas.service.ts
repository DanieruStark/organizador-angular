import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesa } from '../modelo/despesa';
@Injectable({
  providedIn: 'root',
})
export class DespesasService {
  private readonly API = '/api/despesas';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Despesa[]>(this.API);
  }

  save(despesa: Despesa) {
    return this.httpClient
      .post<Despesa>(this.API, despesa);
  }
}
