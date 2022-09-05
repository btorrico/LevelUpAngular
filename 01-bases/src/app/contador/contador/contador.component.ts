import { Component} from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
  <div>
  <h1>{{titulo}}</h1>
</div>
<!-- Alternativa: <button (click)="numero = numero +1; "> + 1 </button>   -->
<div>
<button (click)="operacion(+1) "> + 1 </button>

<span>{{numero}}</span>
<button (click) = "operacion(-1)"> - 1</button>
</div>


<h3>La base es: <strong>{{base}}</strong></h3>
<div>
  <button (click)="acumular(base) "> + {{base}} </button>

  <span>{{otroNumero}}</span>
  <button (click) = "acumular(-base)"> - {{base}}</button>
  </div>
  `
})
export class ContadorComponent{

  titulo:string = 'Contador App';
  numero:number = 10;
  base  : number = 5;
  otroNumero: number = 10;
sumar(){
 this.numero += 1;
}

restar(){
  this.numero -= 1;
}

operacion(valor:number){
  this.numero += valor;
}

acumular(valor:number){
  this.otroNumero+= valor;
}
}
