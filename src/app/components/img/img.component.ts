import { Component,OnInit,Input, Output,EventEmitter,OnChanges, SimpleChanges,AfterViewInit,OnDestroy} from '@angular/core';

// los decoradores son todos los que tienen en su palabra @
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy{
//@Input() img:string='valor init';
@Input() img:string='';
@Output()loaded=new EventEmitter<string>();
imageDefault = './assets/images/default-img.jpg';

constructor(){
    //before render
  //NO async --once time
  console.log('constructor','imgValue=>', this.img);

}
ngOnChanges(){
//ngOnChanges(changes: SimpleChanges): void {
  //before render
  //change inputs --times
  // aca van los inputs y aca es donde se detectan los cambios
  console.log('ngOnChanges','imgValue0>', this.img);
}
ngOnInit(): void {
//no van los cambio de los input aca
  //before render
  // async - fetch -- once time
  console.log('constructor','imgValue=>', this.img);
}
ngAfterViewInit(){
  // after render
  //handler children
  console.log('AfterViewInit');
}
ngOnDestroy() {
//delete
}
imgError() {
  this.img = this.imageDefault;
}

imgLoaded() {
  console.log('log hijo');
  this.loaded.emit(this.img); //le esta mandando informacion al padre cuando es exitos el envio
}


}
