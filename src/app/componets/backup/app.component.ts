import { Component } from '@angular/core';
import { Product } from './product.model';


// esto es un decorador que le dice a angular como deve compotarse
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  widthImg=10;
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
  register={
    name:'',
    email:'',
    password:''
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
  onRegister(){
console.log(this.register);
  }
names: string[] = [
    'juan',
    'pablo',
    'rman'
  ];
  box={
    width:10,
    height:10,
    background:'red'
  }
  newName = '';

  addName(){
    this.names.push(this.newName);
    this.newName="";
  }
  deleteName(index : number){
    this.names.splice(index,1);

  }

  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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
