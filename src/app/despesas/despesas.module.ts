import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasComponent } from './despesas/despesas.component';

@NgModule({
  declarations: [DespesasComponent],
  imports: [CommonModule, DespesasRoutingModule, MatTableModule],
})
export class DespesasModule {}
