import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '57f149c17adb69f0a80a37e0b303bc17';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<WeatherDatas> {
    return this.http.get<WeatherDatas>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
       );
  }
}
