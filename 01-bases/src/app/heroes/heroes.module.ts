import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports:[
      ListadoComponent,
      HeroeComponent
  ], // en exports van los componenetes que van a ser usados por otros, ejem en el HTML
  imports: [
    CommonModule // Se importa para poder usar *ngFor y *ngIf en los componentes del modulo
  ]//En imports solo se ponen los modulos
})
export class HeroesModule{

}
