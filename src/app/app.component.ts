import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//imgParent ='https://img.freepik.com/vector-premium/diseno-ilustracion-vector-personaje-avatar-hombre-joven_24877-18514.jpg?w=826';
imgParent ='';
onLoaded(img:string){
  console.log("log Padre",img)
}
}
