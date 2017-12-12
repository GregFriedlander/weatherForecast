import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from './../weather-forcast.service';

@Component({
  selector: 'app-washington-dc',
  templateUrl: './washington-dc.component.html',
  styleUrls: ['./washington-dc.component.css']
})
export class WashingtonDcComponent implements OnInit {

  city: any = {};

  constructor(private _weatherForcastService: WeatherForcastService) { }

  ngOnInit() {
    console.log('clicked on washington dc');
    this._weatherForcastService.getWeather('district of columbia,us');
    this._weatherForcastService.city.subscribe((response)=>{
      this.city = response;
      console.log('washington dc weather: ', this.city);
    })
  }

}
