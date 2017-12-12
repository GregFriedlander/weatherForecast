import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherForcastService } from './../weather-forcast.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  city: any = {};

  constructor(private _weatherForcastService: WeatherForcastService) { }

  ngOnInit() {
    console.log('clicked on burbank');
    this._weatherForcastService.getWeather('burbank,us');
    this._weatherForcastService.city.subscribe((response)=>{
      this.city = response;
      console.log('burbank weather: ', this.city);
    })
    
  }
  
}
