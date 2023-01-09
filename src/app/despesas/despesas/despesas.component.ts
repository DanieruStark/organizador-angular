import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesa } from '../modelo/despesa';
import { DespesasService } from '../services/despesas.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {
  despesas: Observable<Despesa[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private despesasService: DespesasService) {
    this.despesas = this.despesasService.list();
   }

  ngOnInit(): void {
  }

}
