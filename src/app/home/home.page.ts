import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route : Router, private youtube: YoutubeVideoPlayer) {}
  openintrod(){
    this.route.navigateByUrl('introduction');
  }
  openMyVideo(id){
    this.youtube.openVideo(id);
  }
}
