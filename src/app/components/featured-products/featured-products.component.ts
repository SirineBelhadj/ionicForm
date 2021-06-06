import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../../pages/product-details/product-details.component';
import{GetapiService} from 'src/app/getapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  
  products: Product[]=[
    {
      id: 1,
      titre: "impacte des réseaux sociaux",
      categorieDeSondage: `Social`,
      description: 'Ce sondage est dédié au gens qui utilisent les réseaux sociaux',
      dateDeCreation: '28/05/2021',
      dateDeFermuture:' 30/06/2021',
      dateDeModification:' 28/05/2021',
      images:["assets/images/category/shoes.jpg"],
      nbParticipant:40,
      active: true,
      suspendu: false,
      frais:0.600
    },
    {
      id: 1,
      titre: "Vaccination de COVID",
      categorieDeSondage: `santé`,
      description: 'Ce sondage est dédié aux gens qui ont une idée sur la vaccination',
      dateDeCreation: '28/05/2021',
      dateDeFermuture:' 30/06/2021',
      dateDeModification:' 28/05/2021',
      images:[ "assets/images/category/jewelry.jpg"],
      nbParticipant:60,
        active: true,
      suspendu: false,
      frais:0.500
    },
    {
      id: 1,
      titre: "impacte des réseaux sociaux",
      categorieDeSondage: `Social`,
      description: 'Ce sondage est dédié au gens qui utilisent les réseaux sociaux',
      dateDeCreation: '28/05/2021',
      dateDeFermuture:' 30/06/2021',
      dateDeModification:' 28/05/2021',
      images:["assets/images/category/shoes.jpg"],
      nbParticipant:50,
        active: false,
      suspendu: false,
     frais:0.450
    }
  ];

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };

  constructor(private productsService: ProductsService,
    private Router:Router,
    private api:GetapiService,
    private modalController: ModalController) { }

  listObject=[]
  listShowedObject=[]  
  ngOnInit() {
  //this.getProductList();
  //  this.api.apiCallSondage().subscribe((data)=>{
  ////    console.log("get api data",data)
   // })
    this.listShowedObject=this.listShowedObject
    this.listShowedObject=this.listShowedObject.filter(elt=>elt.a=='1')
  }
 

  getProductList() {
    this.products = this.productsService.productList();
  }
  goToListeDesSondages(){
    this.Router.navigate(["/liste-des-sondages"])
  }

  async goToProductDetails(product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: product
    });
    return await modal.present();
  }
  
  
  
}
