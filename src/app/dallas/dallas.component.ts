import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from './../weather-forcast.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  city: any = {};

  constructor(private _weatherForcastService: WeatherForcastService) { }

  ngOnInit() {
    console.log('clicked on dallas');
    this._weatherForcastService.getWeather('dallas,us');
    this._weatherForcastService.city.subscribe((response)=>{
      this.city = response;
      console.log('dallas weather: ', this.city);
    })
  }

}
