import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  showCategory = false;

  constructor() { }

  ngOnInit(): void {
  }
  showCateDiv(){
    this.showCategory = !this.showCategory;
  }

}
