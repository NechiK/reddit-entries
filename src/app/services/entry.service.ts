import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: HttpClient) { }

  getEntries(subredditName: string, params: {limit?: number, after?: string, before?: string} = {limit: 10}): Observable<any> {
    let queryParams = new HttpParams();

    Object.keys(params).forEach(oneParam => {
      queryParams = queryParams.set(oneParam, params[oneParam]);
    });

    return this.http.get(`https://www.reddit.com/r/${subredditName}.json`, {
      params: queryParams
    });
  }

  getOneEntry(params: {subredditName: string, entryId: number | string, entryName: string}): Observable<any> {
    return this.http.get(`https://www.reddit.com/r/${params.subredditName}/comments/${params.entryId}/${params.entryName}.json`);
  }
}
