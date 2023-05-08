import { Component,OnInit,Input, Output,EventEmitter} from '@angular/core';

// los decoradores son todos los que tienen en su palabra @
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit{
//@Input() img:string='valor init';
@Input() img:string='';
@Output()loaded=new EventEmitter<string>();
imageDefault = './assets/images/default-img.jpg';

constructor(){}

ngOnInit(): void {}

imgError() {
  this.img = this.imageDefault;
}

imgLoaded() {
  console.log('log hijo');
  this.loaded.emit(this.img); //le esta mandando informacion al padre cuando es exitos el envio
}


}
