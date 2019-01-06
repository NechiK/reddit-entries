import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubRedditService {

  constructor(private http: HttpClient) { }

  getSubReddits(params: {limit?: number, after?: string} = {limit: 10}): Observable<any> {
    let queryParams = new HttpParams();

    Object.keys(params).forEach(oneParam => {
      queryParams = queryParams.set(oneParam, params[oneParam]);
    });

    return this.http.get('https://www.reddit.com/subreddits.json', {
      params: queryParams
    });
  }
}
