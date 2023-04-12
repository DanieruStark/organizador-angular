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
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'price', 'actions'];

  onAdd() {
    this.add.emit(true);
  }

  onEdit(despesa: Despesa){
    this.edit.emit(despesa);
  }

  onDelete(despesa: Despesa){
    this.remove.emit(despesa);
  }
}
