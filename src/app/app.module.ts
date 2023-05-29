import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { ContratsComponent } from './contrats/contrats.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { DepensesComponent } from './depenses/depenses.component';
import { UpdateDepenseComponent } from './update-depense/update-depense.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    UpdateComponent,
    ContratsComponent,
    UpdateContratComponent,
    DepensesComponent,
    UpdateDepenseComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
