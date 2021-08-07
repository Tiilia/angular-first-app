import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  private _url: string = "https://restcountries.eu/rest/v2/";

  constructor(private _http: HttpClient) { }

  public getAllCountries(): Observable<Country> {
    return this._http.get<Country>(this._url + 'all/')
  }
  public getOneCountry(code: string): Observable<Country> {
    return this._http.get<Country>(this._url + 'alpha/' + code);
  }
}
