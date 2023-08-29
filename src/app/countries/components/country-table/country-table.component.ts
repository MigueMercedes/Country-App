import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
    img{
      width:25px
    }
    `
  ],
})
export class CountryTableComponent implements OnInit{

  @Input()
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countriesService.searchAllCountries()
    .subscribe(countries => this.countries = countries);
  }

  searchAllCountries(): void {

  }

}
