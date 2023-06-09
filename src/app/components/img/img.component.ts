import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img  =>' ,this.img);
    // code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default-img.jpg';
// counter = 0;
// counterFn: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    // aca van los inputs y aca es donde se detectan los cambios
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before - during render
    // changes inputs -- multiples times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
    // if (changes.) {
    //   // code
    // }
  }

  ngOnInit(): void {
    //no van los cambio de los input aca
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
 //   this.counterFn = window.setInterval(() => {
 //     this.counter += 1;
 //     console.log('run counter');
 //   }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy');
   // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);  //le esta mandando informacion al padre cuando es exitos el envio
  }

}
