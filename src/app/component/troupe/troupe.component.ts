import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';


@Component({
  selector: 'app-troupe',
  templateUrl: './troupe.component.html',
  styleUrls: ['./troupe.component.scss'],
})
export class TroupeComponent implements OnInit {
  k:any;
  troupearabesque:any
  troupehanine:any
  troupemajorette:any
  troupemaIfriga:any
  img:any;
  videoo:any;
  myId = null;
 vds:any;
  constructor(private activatedRoute: ActivatedRoute, private youtube: YoutubeVideoPlayer) {
    
  
    }

  ngOnInit() {this.myId = this.activatedRoute.snapshot.paramMap.get('myid'); console.log(this.myId)
 if (this.myId=='tunisie'){
  this.troupearabesque=[{
    titre:"troupe arabesque",
    img1:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/22050252_1545076032216806_1057975098031181137_n.jpg",
    img2:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/70587025_2504246196299780_4525302174426595328_n.jpg",
    img3:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/65628967_2391144044276663_8901990972808757248_n.jpg",
  }];
  this.troupehanine=[{
    titre:"troupe hanine",
    img1:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/80577240_2830358313694369_6496543046321045504_n.jpg",
    img2:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/84119120_2933918523338347_6914157594277838848_n.jpg",
    img3:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/84622319_2932857460111120_1859702718700978176_n.jpg",
  }];
  this.troupemajorette=[{
    titre:"troupe majorette",
    img1:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/Majorat-Ksar-Hlal-1-1.jpg",
   
  }];
  this.troupemaIfriga=[{
    titre:"troupe Ifriga",
    url:"RdyqqThQYu8",
    img:"../../../assets/img/troupeIfriga.png"
  }];
  
 }if (this.myId=='algerie'){
  this.k="hello"; 
   this.vds=[{
  titre:" مجموعة-الاغواط-الجزائرية",
  url:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/81952318_460178137968290_1789891604098906512_n.mp4",
 
}];
console.log(this.vds);

 }
 if (this.myId=='italie'){
   this.k=null;
  this.troupearabesque=[{
    titre:"val-dakragas",
    img1:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/val-akragas-2.jpg",
    img2:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/82291916_1371361103033742_3904707321736986624_o.jpg",
    img3:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/81857385_1371361056367080_1248435280847831040_o.jpg",
  }];
 }
 if (this.myId=='egypte'){

  this.k="hello"; 
  this.vds=[{
 titre:" مجموعة سهر الليالي الاستعراضية",
 url:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/videoplayback.mp4?_=1",

}];
}
  }
  openMyVideo(id){
    this.youtube.openVideo(id);
  }
}
