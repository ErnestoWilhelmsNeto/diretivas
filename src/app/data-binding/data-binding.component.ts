import { Component, OnInit, NgModule } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  url = "http://senado.gov.br";
  curtiu = true;
  urlImagem = "https://loremflickr.com/320/240/paris";
  urlImagem1 = "https://loremflickr.com/320/240/dog";
  // tslint:disable-next-line: no-inferrable-types
  valorAtual: string = "";
  // tslint:disable-next-line: no-inferrable-types
  valorSalvo: string = "";

  isMouseOver = false;

  valorInicial: number = 8;

  nomeCurso = "Angular - JS";
  dataCurso = "03/03/2020";

  getValor() {
    return 10;
  }
  getCurtiu() {
    return true;
  }
  botaoClick() {
    alert("Bot�o selecionado.");
  }
  onKeyUp(evento: KeyboardEvent) {
    console.log((evento.target as HTMLInputElement).value);
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }
  salvarValor(valor) {
    this.valorSalvo = valor;
    this.valorInicial = valor;
  }

  onMouseOver(evento: MouseEvent) {
    this.isMouseOver = true;
  }
  onMouseOut(evento: MouseEvent) {
    this.isMouseOver = false;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit(): void {}
}
