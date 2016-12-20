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

  public data= {
      query: "",
      after: "",
      before: "",
      relatedVideoId: ""
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
            value: '2d',
            label: '2d'
        },{
            value: '3d',
            label: '3d'
        },{
            value: 'any',
            label: 'any'
        }],
      vDuration: [{
            value: 'any',
            label: 'any'
        },{
            value: 'long',
            label: 'long'
        },{
            value: 'medium',
            label: 'medium'
        },{
            value: 'short',
            label: 'short'
        }],
      safeSearch: [{
            value: 'moderate',
            label: 'moderate'
        },{
            value: 'none',
            label: 'none'
        },{
            value: 'strict',
            label: 'strict'
        }]
    };
  constructor(public youtube:YoutubeServiceService, private datePipe: DatePipe) {}

  ngOnInit() {
    
  }
  public search() {
    console.log(this.data);
   /*if(this.data.query && this.date){
    this.youtube.search(this.data.query, this.datePipe.transform(this.date, 'yyyy-MM-dd')  + "T00:00:00Z","viewCount")
    .subscribe( results => this.results = results.items , error =>  this.error = <any>error);
    //.subscribe( results => console.log(results) , error =>  this.error = <any>error);
    } */
  }
  public checked(e, videoObj){
    if(e.target.checked) console.log( videoObj );
  }
  public onSelected(item){
    this.data[item.value] = item.value;
    console.log(this.data);
  }

}
