import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class YoutubeServiceService {
	private API_URL = "https://content.googleapis.com/youtube/v3/search";
  	private API_KEY = "AIzaSyCXaSkPcc9X_GhWDJKO0ycxhZQKTl4dSEk";
  	constructor(private _http:Http) {}

  	search(query, publishedAfter, order): Observable<any>{  
    return this._http
    .get(this.API_URL+'?maxResults=50&order=viewCount&pageToken&part=snippet&publishedAfter='+publishedAfter+'&q='+query+'&type=video&key='+ this.API_KEY)
    .map((response:Response) => response.json());
  }
}
