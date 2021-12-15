import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { list_products } from 'src/app/data';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  listData = list_products;

  constructor() { }

  ngOnInit(): void {

    let toto = _.uniq(this.listData, categorie => categorie.product_breadcrumb_label);
    console.log(toto);
  }

}
