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

  loadById(id: string) {
    return this.httpClient.get<Despesa>(`${this.API}/${id}`);
  }

  save(despesa: Partial<Despesa>) {

    if (despesa._id) {

      return this.update(despesa);
    }

    return this.create(despesa);
  }

  private create(despesa: Partial<Despesa>) {
    return this.httpClient.post<Despesa>(this.API, despesa);
  }

  private update(despesa: Partial<Despesa>) {
    return this.httpClient.put<Despesa>(`${this.API}/${despesa._id}`, despesa);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
