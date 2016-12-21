import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class YoutubeServiceService {
	private API_URL = "https://content.googleapis.com/youtube/v3/search";
  	private API_KEY = "AIzaSyCXaSkPcc9X_GhWDJKO0ycxhZQKTl4dSEk";
  	constructor(private _http:Http) {}
  	search( query, 
            after,
            before, 
            relatedVideoId,
            order,
            vDefinition,
            vDimension,
            vDuration,
            safeSearch): Observable<any>{  
    let url = this.API_URL+'?maxResults=50';
    if(query!= undefined && query!="" && query!=null){
      url +='&q='+ query;
    }
    if(order!= undefined && order!="" && order!=null){
      url +='&order='+ order;
    }
    if(after!= undefined && after!="" && after!=null){
      url +='&publishedAfter='+ after;
    } 
    if(before!= undefined && before!="" && before!=null){
      url +='&publishedBefore='+ before;
    }
    if(relatedVideoId!= undefined && relatedVideoId!="" && relatedVideoId!=null){
      url +='&relatedVideoId='+ relatedVideoId;
    }
    if(vDefinition!= undefined && vDefinition!="" && vDefinition!=null){
      url +='&videoDefinition='+ vDefinition;
    }
    if(vDimension!= undefined && vDimension!="" && vDimension!=null){
       url +='&videoDimension='+ vDimension;
    } 
    if(vDuration!= undefined && vDuration!="" && vDuration!=null){
       url +='&videoDuration='+ vDuration;
    } 
    if(safeSearch!= undefined && safeSearch!="" && safeSearch!=null){
       url +='&safeSearch='+ safeSearch;
    } 
    url +='&part=snippet&videoSyndicated=true&videoEmbeddable=true&type=video&key='+ this.API_KEY;

    return this._http.get(url)
    .map((response:Response) => response.json());
  }
}
