import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { QueryMdxOlapService } from 'src/app/services/db/olap_query.service';


@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css'],
})
export class LinesComponent implements OnInit {

  constructor(private _service: QueryMdxOlapService) {
    console.log('Constructor');
  }
  public lineChartData: ChartDataSets[] = this._service.getLineChartDataSet();
  //public itemsCmb: l[] = this._service.getItemsCmb();
  public lineChartLabels: Label[] = this._service.GetLabelLineChartLabels(
  //public lineChartLabels: Label[] = this._service.GetLabelLineChartLabels(
    this.lineChartData
  );
  public lineChartOptions: any = {
    responsive: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public aaaa: any = this._service.getItemsCmb();
  ngOnInit(): void {}

  public randomize(): void {
    // let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    // for (let i = 0; i < this.lineChartData.length; i++) {
    //   _lineChartData[i] = {
    //     data: new Array(this.lineChartData[i].data.length),
    //     label: this.lineChartData[i].label,
    //   };
    //   for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //     _lineChartData[i].data[j] = Math.floor(Math.random() * 100 + 1);
    //   }
    // }
    // this.lineChartData = _lineChartData;
    console.log(this.aaaa);
  }

  public forInTable(): void {}
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
