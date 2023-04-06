import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DespesasComponent } from './containers/despesas/despesas.component';
import { DespesasFormComponent } from './containers/despesasform/despesas-form.component';

const routes: Routes = [
  { path: '', component: DespesasComponent },
  { path: 'novo', component: DespesasFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesasRoutingModule {}
