import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Classe } from 'src/model/classe';

@Component({
  selector: 'app-classe-detalhes',
  templateUrl: './classe-detalhes.component.html',
  styleUrls: ['./classe-detalhes.component.css']
})
export class ClasseDetalhesComponent implements OnInit {

  classe: Classe = { idClasse: 0, Nome: '', Descricao: '', Ativo: true };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getClasse(this.route.snapshot.params['idClasse']);
  }

  getClasse(id) {
    this.api.getClasse(id)
      .subscribe(data => {
        this.classe = data;
        console.log(this.classe);
        this.isLoadingResults = false;
      });
  }

  deleteClasse(id) {
    this.isLoadingResults = true;
    this.api.deleteClasse(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/classe-todos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
