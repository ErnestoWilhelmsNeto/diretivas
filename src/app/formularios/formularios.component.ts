import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  nome = 'ABC';

  pessoa: any = {
    nome: 'Ernesto',
    idade: 55
  };

  onMouseOver() {
    this.pessoa.idade = 25;
  }

  onClick() {
    this.nome = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
