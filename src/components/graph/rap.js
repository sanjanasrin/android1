import React, { Component } from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import './rap.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import DataFetc1 from './dataFetc';

am4core.useTheme(am4themes_animated);


class App3 extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    let data = [];
    let visits=[12,13,14,16,17];

    for (let i = 1; i < 4; i++) {
      data.push({ date: new Date(2022,9, i), name: "name" + i, value: visits[i]});
    }
    chart.data = data;
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div className="demen">
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </div>
    );
  }
}

export default App3

