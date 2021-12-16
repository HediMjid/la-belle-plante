import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
//import { list_products } from 'src/app/data';
import { PlantsService } from 'src/app/plants.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  public listData!:any[];
  public listCategories!: string[];
  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {

    //let toto = _.uniq(this.listData, categorie => categorie.product_breadcrumb_label);
    //let toto = _.countBy(this.listData, "product_breadcrumb_label");
    //let toto = _.groupBy(this.listData, "product_breadcrumb_label");
    //this.listCategories = _.chain(this.listData).map(function(categorie) { return categorie.product_breadcrumb_label.charAt(0).toUpperCase() + categorie.product_breadcrumb_label.slice(1) }).uniq().value();       

    this.plantsService.getData().subscribe((data: any[]) => {
      this.listData = data;
      console.log(this.listData);
      this.listCategories = _.uniq(this.listData.map(product => product.product_breadcrumb_label));
    });
    
    

    //this.listCategories = [...new Set(this.listData.map(product => product.product_breadcrumb_label))];
    
    console.log(this.listCategories);

  }

}
