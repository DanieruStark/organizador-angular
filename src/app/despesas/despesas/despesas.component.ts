import { Component, OnInit } from '@angular/core';
import { Despesa } from '../modelo/despesa';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {
  despesas: Despesa[] = [
    {_id: "1", nome: "Enegia", categoria: "casa"}
  ];
  displayedColumns = ['nome', 'categoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
