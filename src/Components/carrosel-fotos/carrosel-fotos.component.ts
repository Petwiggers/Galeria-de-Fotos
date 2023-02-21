import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrosel-fotos',
  templateUrl: './carrosel-fotos.component.html',
  styleUrls: ['./carrosel-fotos.component.css']
})
export class CarroselFotosComponent {
  public title = 'Galeria de Imagens';
  @Input() public fotos: string[] = [];
  public index: number = 0;

public irParaProxima(): void {
  if (this.index !== this.fotos.length - 1) {
    this.index += 1;
  }
}

public irParaAnterior(): void {
  if (this.index !== 0) {
    this.index -= 1;
  }
}

public vaiParaUltima(): void {
  this.index = this.fotos.length - 1;
}

public voltarParaPrimeira(): void {
  this.index = 0;
}
}

  

 