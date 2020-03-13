import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/provider/Participant';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-participants-details',
  templateUrl: './participants-details.component.html',
  styleUrls: ['./participants-details.component.scss'],
})
export class ParticipantsDetailsComponent implements OnInit {
  myId :any;
  participant : any;
  participantwithid:any;
  constructor(private activatedRoute: ActivatedRoute,private partici:Participant,private youtube: YoutubeVideoPlayer) {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid'); console.log(this.myId);
this.participant=partici.participants[this.myId];
   }

  ngOnInit() {}
  openMyVideo(id){
    this.youtube.openVideo(id);
  }
}
