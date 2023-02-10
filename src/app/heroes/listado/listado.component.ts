import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  title: string = 'Listado de Heroes';
  heroes: string[] = ['IronMan', 'SpiderMan', 'Hulk'];
  heroeBorrado: string = '';

  borrarHeroe = ():void =>{
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
