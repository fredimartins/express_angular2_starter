import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

import { Product } from './../../../common/models/IProduct';

@Injectable()
export class AppService {

private productsUrl = 'api/products';  // URL to web API

  constructor (private _http: Http) {
  }


  getProducts() : Observable<Product[]>{
    return this._http.get(this.productsUrl)
    .map(res => res.json());
  }

}
