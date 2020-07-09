import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Classe } from 'src/model/classe';

@Component({
  selector: 'app-classe-todos',
  templateUrl: './classe-todos.component.html',
  styleUrls: ['./classe-todos.component.css']
})
export class ClasseTodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
