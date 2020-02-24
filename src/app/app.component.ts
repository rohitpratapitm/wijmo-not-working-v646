import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { WjFlexGrid, WjFlexGridColumn } from 'wijmo/wijmo.angular2.grid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  @ViewChild('grid', { static: true }) flexGrid: WjFlexGrid;
    data;
  constructor() {
    this.data= this.getData(50);
  }

  filterApplied(grid,args){
    console.log("Filter Appliesd");
  }
ngAfterViewInit() {
        if (this.flexGrid && this.flexGrid.columns && this.flexGrid.columns.length) {
          console.log('Hey ');
          this.changedColumnWidth(this.flexGrid.columns, 'Id');
        }
}
changedColumnWidth(columns: WjFlexGridColumn[], headerTxt: string){
  const column:WjFlexGridColumn = columns.find((persistedColumn) => persistedColumn.header === headerTxt);
  if(column.visible){
    column.width=150;
  }
}
  getData(count): any[] {
        // create some random data
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = [];
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                date: new Date(2015, i % 12, (i + 1) % 25),
                time: new Date(2015, i % 12, (i + 1) % 25, i % 24, i % 60, i % 60),
                country: countries[i % countries.length],
                countryMapped: i % countries.length,
                downloads: Math.round(Math.random() * 20000),
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000,
                checked: Boolean(Math.floor(Math.random()+0.5))
            });
        }
        return data;
    }
}