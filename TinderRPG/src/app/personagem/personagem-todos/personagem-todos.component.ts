import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Personagem } from 'src/model/personagem';

@Component({
  selector: 'app-personagem-todos',
  templateUrl: './personagem-todos.component.html',
  styleUrls: ['./personagem-todos.component.css']
})
export class PersonagemTodosComponent implements OnInit {
  displayedColumns: string[] = [ "idPersonagem", "nome", "descricao", "nivel", "raca.nome", "classe.nome", "acao" ];
  dataSource: Personagem[];
  isLoadingResults = false;
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getPersonagens()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
