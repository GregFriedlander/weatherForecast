import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from './../weather-forcast.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  city: any = {};

  constructor(private _weatherForcastService: WeatherForcastService) { }

  ngOnInit() {
    console.log('clicked on chicago');
    this._weatherForcastService.getWeather('chicago,us');
    this._weatherForcastService.city.subscribe((response)=>{
      this.city = response;
      console.log('chicago weather: ', this.city);
    })
  }

}
