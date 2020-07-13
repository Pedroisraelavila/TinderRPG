import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasseTodosComponent } from './classe/classe-todos/classe-todos.component';
import { ClasseDetalhesComponent } from './classe/classe-detalhes/classe-detalhes.component';
import { ClasseEditarComponent } from './classe/classe-editar/classe-editar.component';
import { ClasseNovoComponent } from './classe/classe-novo/classe-novo.component';
import { PersonagemTodosComponent } from './personagem/personagem-todos/personagem-todos.component';

const routes: Routes = [
  {
    path: 'classe-todos',
    component: ClasseTodosComponent,
    data: { title: 'Lista de Classes' }
  },
  {
    path: 'classe-detalhe/:id',
    component: ClasseDetalhesComponent,
    data: { title: 'Detalhes da Classe' }
  },
  {
    path: 'classe-novo',
    component: ClasseNovoComponent,
    data: { title: 'Adicionar Classe' }
  },
  {
    path: 'classe-editar/:id',
    component: ClasseEditarComponent,
    data: { title: 'Editar a Classe' }
  },
  { path: '',
    redirectTo: '/classe-todos',
    pathMatch: 'full'
  },
  {
    path: 'personagem-todos',
    component: PersonagemTodosComponent,
    data: { title: 'Lista de Personagens' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
