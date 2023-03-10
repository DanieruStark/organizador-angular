import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasComponent } from './despesas/despesas.component';
import { DespesasFormComponent } from './despesasform/despesas-form.component';

@NgModule({
  declarations: [DespesasComponent, DespesasFormComponent],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    AppMaterialModule,
    SharedModule,
  ],
})
export class DespesasModule {}
