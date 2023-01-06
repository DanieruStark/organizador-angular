import { Injectable } from '@angular/core';
import { Despesa } from '../modelo/despesa';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root',
})
export class DespesasService {
  constructor(private httpClient: HttpClient) {}

  list(): Despesa[] {
    return [{ _id: '1', nome: 'Enegia', categoria: 'casa' }];
  }
}
