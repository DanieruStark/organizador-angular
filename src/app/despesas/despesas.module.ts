import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasComponent } from './despesas/despesas.component';

@NgModule({
  declarations: [DespesasComponent],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
  ],
})
export class DespesasModule {}
