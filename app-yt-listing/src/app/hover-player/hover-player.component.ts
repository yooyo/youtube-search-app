import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hover-player',
  templateUrl: './hover-player.component.html',
  styleUrls: ['./hover-player.component.css']
})
export class HoverPlayerComponent implements OnInit {

  private hidePlayer:boolean = false;
  private video_base_url:String = "https://www.youtube.com/embed/";
  private video_options:String = "?autoplay=1&rel=0&vq=small&showinfo=0&controls=0";
  public video_source ;
  @Input() src;
  @Input() video_id;
  
  constructor() {}
  
  ngOnInit() {
    //console.log(this.src + this.video_id);
  }
  public ShowHoverPlayer(){
    this.hidePlayer = true;
    this.video_source = this.video_base_url + this.video_id + this.video_options ;
  }
  public hideHoverPlayer(){
    this.hidePlayer = false;
    this.video_source = this.video_base_url + this.video_id + this.video_options ;
  }

}
