import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, CurrentWeather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getWeather(
    q: string
  ): Observable<APIResponse<CurrentWeather>> {
    let params = new HttpParams().set('q', q)

    return this.http.get<APIResponse<CurrentWeather>>(`${env.BASE_URL}/data/2.5/weather`, {
      params: params,
    });

  }
}
