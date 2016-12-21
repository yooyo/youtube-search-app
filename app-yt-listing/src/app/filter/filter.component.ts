import { Component, OnInit } from '@angular/core';
import { YoutubeServiceService } from '../youtube-service.service';
import { HoverPlayerComponent } from '../hover-player/hover-player.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public results:any;
  public date:string;
  private error:string;
  public advShow:boolean = false;
  public showSettings:boolean = false;

  public data= {
      query: "",
      after: "",
      before: "",
      relatedVideoId: "",
      order:"rating",
      vDefinition:"any",
      vDimension:"any",
      vDuration:'any',
      safeSearch:"none",
      videoSyndicated:true,
      videoEmbeddable:true
    };
  public options:Object = {
      order: [{
            value: 'date',
            label: 'by date'
       },{
            value: 'rating',
            label: 'by rating'
       },{
            value: 'relevance',
            label: 'by relevance'
       },{
            value: 'title',
            label: 'by title'
       },{
            value: 'videoCount',
            label: 'by video count'
       },{
            value: 'viewCount',
            label: 'by view count'
       }],
      vDefinition: [{
            value: 'any',
            label: 'any'
        },{
            value: 'high',
            label: 'high'
        },{
            value: 'standard',
            label: 'standard'
        }],
      vDimension: [{
            value: 'any',
            label: 'any'
        },{
            value: '3d',
            label: '3d'
        },{
            value: '2d',
            label: '2d'
        }],
      vDuration: [{
            value: 'any',
            label: 'Any'
        },{
            value: 'long',
            label: 'Long (longer than 20 minuts)'
        },{
            value: 'medium',
            label: 'Medium (4-20 minutes)'
        },{
            value: 'short',
            label: 'Short (less than 4 minutes)'
        }],
      safeSearch: [{
            value: 'none',
            label: 'none'
        },{
            value: 'moderate',
            label: 'moderate'
        },{
            value: 'strict',
            label: 'strict'
        }]
    };
  constructor(public youtube:YoutubeServiceService, private datePipe: DatePipe) {}

  ngOnInit() {
    
  }
  public search() {
   if(this.data.query){
    this.youtube.search(this.data.query, 
                        this.getDate(this.data.after),
                        this.getDate(this.data.before), 
                        this.data.relatedVideoId,
                        this.data.order,
                        this.data.vDefinition,
                        this.data.vDimension,
                        this.data.vDuration,
                        this.data.safeSearch)
    .subscribe( results => this.results = results.items , error =>  this.error = <any>error);
    }
  }
  public getDate(obj){
      console.log(obj);
    if(obj && obj!= null && obj!= undefined){
      return obj.year +"-"+ obj.month +"-"+ obj.day +"T00:00:00Z";
    }else{
        return '';
    }
  }
  public onSelected(value, ref){
    this.data[ref] = value;
    console.log(this.data);
  }

}
