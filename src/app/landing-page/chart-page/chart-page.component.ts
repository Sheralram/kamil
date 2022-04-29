import { Component, OnInit, Input } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  @Input() filterData: any; 
  chartOption: EChartsOption ={
    color: ['#4AC3E9'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 'District 7'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  };
  chartOption2: EChartsOption = {
    color: ['#4AC3E9'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 'District 7'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  };
  chartOption3: EChartsOption = {
    color: ['#4AC3E9'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 'District 7'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  };

  chartOption4: EChartsOption = {
    color: ['#4AC3E9'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 'District 7'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  };

  chartOption5: EChartsOption = {
    color: ['#4AC3E9'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 'District 7'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.filterData)
  }

}
