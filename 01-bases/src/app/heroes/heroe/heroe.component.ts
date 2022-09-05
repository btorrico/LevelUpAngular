import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})

export class HeroeComponent{
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string{

    return `${this.nombre } - ${this.edad}`;
  }

  cambiarNombre(otroNombre: string):string{
    this.nombre = otroNombre;
    return this.nombre;
  }

  cambiarEdad(nuevaEdad:number):void{
    this.edad=nuevaEdad;
   // return this.edad;
  }

}

