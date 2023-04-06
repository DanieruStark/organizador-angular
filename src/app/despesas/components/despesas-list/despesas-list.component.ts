import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Despesa } from '../../modelo/despesa';

@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.scss'],
})
export class DespesasListComponent {
  @Input() despesas: Despesa[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'price', 'actions'];

  onAdd() {
    this.add.emit(true);
  }
}
