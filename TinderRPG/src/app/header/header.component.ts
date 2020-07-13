import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <img scr="img/logo.png">
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
