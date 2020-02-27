import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-contador",
  templateUrl: "./output-property.component.html",
  styleUrls: ["./output-property.component.css"]
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa() {
    this.valor <= 9 ? this.valor++ : (this.valor = 10);
    //  this.mudouValor.emit({ novoValor: this.valor });
    console.log(this.campoValorInput.nativeElement.value);
  }
  decrementa() {
    this.valor >= 1 ? this.valor-- : (this.valor = 0);
    //  this.mudouValor.emit({ novoValor: this.valor });
    console.log(this.campoValorInput.nativeElement.value);
  }
  constructor() { }

  ngOnInit(): void { }
}
