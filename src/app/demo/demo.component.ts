import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title =  'platzi-store';

  items = ['nicolar', 'jualian', 'perez'];

  objeto = {}

  power = 10;

  constructor() { }

  ngOnInit(): void {
    //code
  }

  addItem(){
    this.items.push('new item');
  }

  deleteItem(index:number){
    /*The splice() method changes the contents of an array 
    by removing or replacing existing elements and/or 
    adding new elements in place*/
    this.items.splice(index, 1);
  }

}
