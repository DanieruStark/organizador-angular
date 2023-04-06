import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { DespesasListComponent } from './components/despesas-list/despesas-list.component';
import { DespesasComponent } from './containers/despesas/despesas.component';
import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasFormComponent } from './containers/despesasform/despesas-form.component';

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
