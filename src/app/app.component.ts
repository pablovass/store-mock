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
  btnDisabled=true;

  person={
    name:'pablo',
    age:21,
    avatar: 'https://img.freepik.com/vector-premium/diseno-ilustracion-vector-personaje-avatar-hombre-joven_24877-18514.jpg?w=826'
  }
  toggleButton(){
    //this.btnDisabled=false;
    this.btnDisabled=!this.btnDisabled;
  }
  increaseAge(){
    this.person.age+=1;
  }
  onScroll(event:Event){
    const element= event.target as HTMLElement;
    console.log(element.scrollTop);

  }
  changeName(event :Event){
    const element= event.target as HTMLInputElement;
    this.person.name =element.value;
  }

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
