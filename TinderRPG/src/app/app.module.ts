import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasseTodosComponent } from './classe-todos/classe-todos.component';
import { ClasseDetalhesComponent } from './classe-detalhes/classe-detalhes.component';
import { ClasseNovoComponent } from './classe-novo/classe-novo.component';
import { ClasseEditarComponent } from './classe-editar/classe-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasseTodosComponent,
    ClasseDetalhesComponent,
    ClasseNovoComponent,
    ClasseEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
