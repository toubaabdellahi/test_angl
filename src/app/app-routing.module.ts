import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { ClientComponent } from './client/client.component';
import { ContratsComponent } from './contrats/contrats.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { DepensesComponent } from './depenses/depenses.component';
import { UpdateDepenseComponent } from './update-depense/update-depense.component';

const routes: Routes = [
  {path: '', component:ClientComponent},
  {path: 'contrats', component:ContratsComponent},
  {path: 'contrats/update/:id_contrat', component:UpdateContratComponent},
  {path: 'depenses', component:DepensesComponent},
  {path: 'depenses/update/:id_depense', component:UpdateDepenseComponent},
  {path: 'update/:id_client', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
