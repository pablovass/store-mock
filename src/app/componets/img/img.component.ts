import { Component,OnInit,Input } from '@angular/core';

// los decoradores son todos los que tienen en su palabra @
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit{
@Input() img:string='valor init';
constructor(){}
ngOnInit(): void {

}
}
