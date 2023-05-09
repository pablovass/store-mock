import { Component,OnInit,Input } from '@angular/core';
//import {Product}from 'src/app/models/product.model';
import {Product}from '../../models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent  implements OnInit{

  @Input() product: Product={
  id:'',
  price: 0,
  image:'',
  name:''
};

constructor(){}
ngOnInit(): void {

}
}

