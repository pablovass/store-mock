const username:string='pablobyte';
const sum(a:number,b:number)=>{
  return a+b;
}

sum(1,3);

//class Person{
//  age:number;
//  lastName:string;
//  constructor(age:number,lastName:string){
//    this.age=age;
//    this.lastName=lastName;
//
//  }
//}

class Person {
  constructor(private age:number,public lastName:string){}
}
const nico=new Person(15,"molina");
//nico.age;
