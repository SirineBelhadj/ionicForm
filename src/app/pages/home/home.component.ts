/**
 * Home Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetapiService} from 'src/app/getapi.service';
import {Sondage} from 'src/app/models/sondage'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    

  constructor(private router: Router,
              private api:GetapiService
             ) { }

             ngOnInit() {
           /*   this.api.apiCall().subscribe((data)=>{
                console.log("get api data",data)
              })*/
            }
  // Go to cart page
  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }
  
    
  
}
