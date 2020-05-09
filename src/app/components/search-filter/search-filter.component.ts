import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {
   selectedCars = [];
  cars = [
    { id: 1, name: 'Life Without Fear', nameDimension: '[DIM AUTOR]' },
    { id: 2, name: 'Emotional Security: A New Algorithm', nameDimension: '[DIM AUTOR]' },
    { id: 3, name: 'Opel', nameDimension: '[DIM AUTOR]',  },
    { id: 4, name: 'Audi', nameDimension: '[DIM AUTOR]' },
  ];
  dimensions = [
    { id: 1, nameDimension: '[DIM AUTOR]', name: 'Autor' },
    { id: 2, nameDimension: '[DIM EDITORIAL]', name: 'Editorial' },
    { id: 3, nameDimension: '[DIM LIBRO]', name: 'Libro' },
    { id: 4, nameDimension: '[DIM LUGAR]', name: 'Lugar' },
    { id: 5, nameDimension: '[DIM TIEMPO]', name: 'Tiempo' },
    { id: 7, nameDimension: '[DIM TIENDA]', name: 'Tienda' },
  ];
  selectedDimension: any;
  ngOnInit() {}
  onChange() {
    console.log(this.selectedCars);
  }
}
