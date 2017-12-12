import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class WeatherForcastService {

  city: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getWeather(city: string){
    this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=df14c0bbfa28cf7a070451376a09de46')
    .subscribe((weather:any)=>{
      this.city.next(weather);
    })
  }

}
