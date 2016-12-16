import { Component, OnInit } from '@angular/core';
import { YoutubeServiceService } from '../youtube-service.service';
import { HoverPlayerComponent } from '../hover-player/hover-player.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public results;
  public date;
  public query:string;
  private error;
  /*frameworks = [
        {
            value: 'Angular 2',
            id: 0
        },
        {
            value: 'React',
            id: 1
        }
    ];*/
  constructor(public youtube:YoutubeServiceService ) {}

  ngOnInit() {
    
  }
  public search() {
    if(this.query){
    this.youtube.search(this.query,"2015-11-29T00:00:00Z","viewCount")
    .subscribe( results => this.results = results.items , error =>  this.error = <any>error);
    //.subscribe( results => console.log(results) , error =>  this.error = <any>error);
    }  
  }
  public checked(e, videoObj){
    if(e.target.checked) console.log( videoObj );
  }

}
