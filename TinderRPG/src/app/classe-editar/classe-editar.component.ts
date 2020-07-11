import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-classe-editar',
  templateUrl: './classe-editar.component.html',
  styleUrls: ['./classe-editar.component.css']
})
export class ClasseEditarComponent implements OnInit {

  idClasse: number = null;
  productForm: FormGroup;
  Nome: String = '';
  Descricao: String = '';
  Ativo: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getClasse(this.route.snapshot.params['idClasse']);
    this.productForm = this.formBuilder.group({
   'Nome' : [null, Validators.required],
   'Descricao' : [null, Validators.required],
   'Ativo' : [null, Validators.required]
 });
 }
 getClasse(id) {
  this.api.getClasse(id).subscribe(data => {
    this.idClasse = data.idClasse;
    this.productForm.setValue({
      Nome: data.Nome,
      Descricao: data.Descricao,
      Ativo: data.Ativo
    });
  });
}

updateClasse(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateClasse(this.idClasse, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/classe-detalhe/' + this.idClasse]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
