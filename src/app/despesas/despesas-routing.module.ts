import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DespesasComponent } from './containers/despesas/despesas.component';
import { DespesasFormComponent } from './containers/despesasform/despesas-form.component';
import { DespesaResolver } from './guards/despesa.resolver';

const routes: Routes = [
  { path: '', component: DespesasComponent },
  { path: 'novo', component: DespesasFormComponent, resolve: {despesa: DespesaResolver}  },
  { path: 'edit/:id', component: DespesasFormComponent, resolve: {despesa: DespesaResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesasRoutingModule {}
