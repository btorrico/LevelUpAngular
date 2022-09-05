import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spriderman','Ironman','Hulk','Thor','Capitan America'];
  heroeEliminado: string ='';
  heroesEliminados: string[] = [];

  borrarHeroe(){
    console.log('borrando...');
    const heroeBorrado = this.heroes.pop() || '';
    // Se pone la condicion  || '' porque cuando se termina de borrar tira undefined y heroeEliminado necesita que el resultado sea string
    console.log(heroeBorrado);
   this.heroeEliminado= heroeBorrado;
  }

  estaBorrado() :boolean{
    return this.heroeEliminado !== '';
  }
}
