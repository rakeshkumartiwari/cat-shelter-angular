import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  template: `
  <div class="container">
  <div class="alert alert-success" *ngFor="let cat of catList ">
  <p>Name : {{cat.name}}<p>
  <p>color : {{cat.color}}<p>
  <div [style.background]="cat.color" style="height:20px;width:20px;"></div>
  </div>
  </div>
  `,
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  @Input() catList: any;


  constructor() { }

  ngOnInit() {
  }

}
