import { CountryApiService } from './../../services/country-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  public allCountries: any = [];
  public code: string = "";

  constructor(private _countryApiService: CountryApiService) { }

  ngOnInit(): void {
    this._countryApiService.getAllCountries().subscribe(
      (cs) => this.setAllCountries(cs),
      (e) => console.error(e),
      () => console.log('fin de traitement')
    );
    console.log('fin init');
  }
  private setAllCountries(countries: any) {
    this.allCountries = countries;
  }

  public getOneCountry() {
    this._countryApiService.getOneCountry(this.code).subscribe(
      (c) => this.allCountries = c,
      (e) => console.error(e),
      () => console.log('fin traitement')
    );
  }

}
