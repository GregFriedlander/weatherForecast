import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from './../weather-forcast.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  city: any = {};

  constructor(private _weatherForcastService: WeatherForcastService) { }

  ngOnInit() {
    console.log('clicked on seattle');
    this._weatherForcastService.getWeather('seattle,us');
    this._weatherForcastService.city.subscribe((response)=>{
      this.city = response;
      console.log('seattle weather: ', this.city);
    })
  }

}
