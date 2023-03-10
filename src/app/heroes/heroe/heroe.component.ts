import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    
    nombre: string = 'Iroman';
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    getNombre = (): string => this.nombre;

    cambiarNombre = (): void => {
        this.nombre = 'SpiderMan';
    }

    cambiarEdad = (): void => {
        this.edad = 20;
    }
}