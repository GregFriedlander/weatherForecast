import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from './../weather-forcast.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  city: any = {};

  constructor(private _weatherForcastService: WeatherForcastService) { }

  ngOnInit() {
    console.log('clicked on san jose');
    this._weatherForcastService.getWeather('san jose,us');
    this._weatherForcastService.city.subscribe((response)=>{
      this.city = response;
      console.log('san jose weather: ', this.city);
    })
  }

}
