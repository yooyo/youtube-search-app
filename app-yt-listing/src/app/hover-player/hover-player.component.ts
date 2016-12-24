import { Component, OnInit, Input } from '@angular/core';

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
  private player;
  private ytEvent;
  @Input() src;
  @Input() video_id;
  
  constructor() {}
  ngOnInit() {}

  public ShowHoverPlayer(){
    this.hidePlayer = true;
    this.video_source = this.video_base_url + this.video_id + this.video_options ;
  }
  public hideHoverPlayer(){
    this.hidePlayer = false;
    this.video_source = this.video_base_url + this.video_id + this.video_options ;
  }
  public onStateChange(event) {
    this.ytEvent = event.data;
  }
  public savePlayer(player) {
    this.player = player;
    console.log(this.player);
  }
  public speedUp(){
    if(this.player){
      this.player.setPlaybackRate(2);
    }
  }
  public backToNormalSpeed(){
    if(this.player){
      this.player.setPlaybackRate(1);
    }
  }
  public getTime(){
    this.player.getCurrentTime()
  }
  public playVideo() {
    this.player.playVideo();
  }
  public pauseVideo() {
    this.player.pauseVideo();
  }
}
