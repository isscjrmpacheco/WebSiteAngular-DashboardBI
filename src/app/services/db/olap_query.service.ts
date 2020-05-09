import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Agregarlo a app.module.ts en providers [QueryMdxOlapService]
@Injectable()
export class QueryMdxOlapService {
  // HttpClientModule   npm i @angular/http
  constructor(private httpClient: HttpClient) {}

  public getItemsCmb() {
    const datos: any[] = [];
    // tslint:disable-next-line:max-line-length
    this.httpClient
      .get(
        `http://localhost/api.pubs.isscjrmp/analysis/pubs/GetDataItemsByDimension/[DIM LIBRO].[NOMBRE LIBRO]/1/0`
      )
      .subscribe(
        (data) => {
          Array.of(
            data['datosDimension'].forEach((element) => {
              datos.push(element);
            })
          );
        },
        (error) => {
          console.error(error);
        }
      );
    return datos;
  }

  public test() {
    return 1;
  }
  public getLineChartDataSet = (): ChartDataSets[] => {
    return [
      { data: [65, 45], label: 'Life Without Fear' },
      { data: [10, 9], label: 'Emotional Security: A New Algorithm' },
    ];
  };
  public GetLabelLineChartLabels(dataset: ChartDataSets[]): Label[] {
    const labelsArray: Label[] = [];
    dataset.forEach((element) => {
      labelsArray.push(element.label);
    });
    return labelsArray;
  }
}
