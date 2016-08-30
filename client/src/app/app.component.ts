import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import { AppService } from './app.service';
import { Product } from './../../../common/models/IProduct';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [AppService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
  private products: Product[];
  private errorMessage: string;


  constructor(private appService:AppService){
    this.loadScript();
    
  }

  ngOnInit() { this.appService.getProducts().subscribe(products => {this.products = products}); }

  public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = "js/sequence-theme.modern-slide-in.js";
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

}
