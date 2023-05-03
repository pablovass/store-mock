import { Component } from '@angular/core';
// esto es un decorador que le dice a angular como deve compotarse
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name ='pablo'; // por defecto tiene un acceso publico
  age=19;
  title = 'store-mock';
  img='https://www.vectorlogo.zone/logos/angular/angular-icon.svg';
}


/**
Verifica versión de Node: node -v

Verifica versión de npm: npm -v

Instala el CLI de Angular: npm -g @angular/cli

Verifica tu instalación: ng version

Crea tu primer proyecto: ng new my-project

Ejecuta el servidor de desarrollo: ng serve Dentro de la carpeta de tu proyecto.

automáticamente:ng serve -o
ng serve -o --port=3500
*/
