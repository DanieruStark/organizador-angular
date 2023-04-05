import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasComponent } from './despesas/despesas.component';
import { DespesasFormComponent } from './despesasform/despesas-form.component';
import { DespesasListComponent } from './despesas-list/despesas-list.component';

@NgModule({
  declarations: [DespesasComponent, DespesasFormComponent, DespesasListComponent],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DespesasModule {}
