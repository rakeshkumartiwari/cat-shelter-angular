import { Component, OnInit } from '@angular/core';
import { Cat } from '../catModel';
@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  catList = [];

  cat: Cat = {
    name: '',
    color: ''
  };

  constructor() { }

  ngOnInit() {
  }

  addCat() {
    this.catList.push(this.cat);
   // this.cat.name = null;
   // this.cat.color = null;
  }
}
