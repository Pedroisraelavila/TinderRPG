import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Classe } from 'src/model/classe';

@Component({
  selector: 'app-classe-todos',
  templateUrl: './classe-todos.component.html',
  styleUrls: ['./classe-todos.component.css']
})
export class ClasseTodosComponent implements OnInit {
  displayedColumns: string[] = [ "idClasse", "Nome", "Descricao", "Ativo" ];
  dataSource: Classe[];
  isLoadingResults = false;
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getClasses()
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
