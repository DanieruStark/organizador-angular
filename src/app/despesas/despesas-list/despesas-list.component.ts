import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Despesa } from '../modelo/despesa';

@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.scss'],
})
export class DespesasListComponent {
  @Input() despesas: Despesa[] = [];
  readonly displayedColumns = ['name', 'category', 'price', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }
}
