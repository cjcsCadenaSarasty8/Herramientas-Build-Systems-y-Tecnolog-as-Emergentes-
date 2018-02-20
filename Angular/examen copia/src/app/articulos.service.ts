import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {Articulo} from './Articulo';

const httpOptions = { headers: new HttpHeaders({

})
};

@Injectable()
export class ArticulosService {

  constructor() { }

}
