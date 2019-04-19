import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  URL = 'https://api.exchangeratesapi.io/latest';
  constructor(private http: HttpClient) { }
  getRates(){
    return this.http.get(this.URL).pipe(
      map((res: any) => {
        res.rates[res.base] = 1;
        return {
          rates: res.rates,
          currs: Object.keys(res.rates).sort()};
      }));
  }
}


