/**
 * Product Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */


import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FilterComponent } from '../filter/filter.component';
import { Category } from '../../models/category.model'
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  // List of prodict
  products: Product[];
  selectedCategories: string[] = [];

  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;

  filter = {
    minFrais: null,
    maxFrais: null
  }

  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.getProductList();
  }

  // Get List of Products
  getProductList() {
    this.products = this.productsService.productList();
    // var frais = this.products.map(prod => prod.frais)
    // this.filter.maxFrais = Math.max(...frais)
    this.products = this.products.map(prod => ({ ...prod, enabled: true }));
  }
  selectCategorie(id: number) {
    this.getProductList()
    this.products.filter(elt => elt.categorieDeSondage == id + '')
  }
  // Go to product details page
  async goToProductDetails(product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: product
    });
    return await modal.present();
  }

  // Open Filter page
  async openFilterPage() {
    const modal = await this.modalController.create({
      component: FilterComponent
    });
    return await modal.present();
  }

  // One column view function
  showOneColumn() {
    this.oneColumn = true;
    this.grid = false
    this.list = false;
  }

  // Grid view function
  showGrid() {
    this.grid = true;
    this.oneColumn = false;
    this.list = false;
  }

  // List view function
  showList() {
    this.list = true;
    this.grid = false;
    this.oneColumn = false;
  }


  onChange(event) {
    console.log("event : ", event)
    if (Array.isArray(this.selectedCategories) && (!event.length || event == [])) {
      this.getProductList();
    } else if (this.selectedCategories && Array.isArray(this.selectedCategories) && this.selectedCategories.length) {
      this.products.map(prod => {
        if (this.selectedCategories.includes(prod.categorieDeSondage))
          prod.enabled = true
        else prod.enabled = false
      })
    }
    else if (this.filter.minFrais && this.filter.maxFrais) {
      this.products.map(prod => {
        if (this.filter.minFrais <= prod.frais && this.filter.maxFrais >= prod.frais)
          prod.enabled = true
        else prod.enabled = false
      })
    }
    // else if (this.filter.maxFrais) {
    //   this.products.map(prod => {
    //     if (this.filter.maxFrais >= prod.frais)
    //       prod.enabled = true
    //     else prod.enabled = false
    //   })
    // }
  }
}
