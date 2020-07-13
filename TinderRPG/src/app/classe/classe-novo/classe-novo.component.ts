import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-classe-novo',
  templateUrl: './classe-novo.component.html',
  styleUrls: ['./classe-novo.component.css']
})
export class ClasseNovoComponent implements OnInit {

  productForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
   'idClasse' : [0],
   'nome' : [null, Validators.required],
   'descricao' : [null, Validators.required],
   'ativo' : [true]
 });
 }

 addClasse(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addClasse(form)
      .subscribe(res => {
          const id = res['idClasse'];
          this.isLoadingResults = false;
          this.router.navigate(['/classe-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
        alert("Cadastrado com sucesso");
  }
}
