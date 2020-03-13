import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataJsonHTTPService } from 'src/app/provider/data-json-http.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-evenementdetails',
  templateUrl: './evenementdetails.component.html',
  styleUrls: ['./evenementdetails.component.scss'],
})
export class EvenementdetailsComponent implements OnInit {
  myId: any;
  img:any;
 z:any;
 vd:any;
 vdideo:any;
 titr:string;
 temps: string;
 datauser:any;
  constructor(public datajson : DataJsonHTTPService,private activatedRoute: ActivatedRoute,public loadingController: LoadingController) { }

  ngOnInit() {this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
  this.presentLoading();
  if (this.myId==' Carnaval de la Tunisie pour la musique universelle   3ème Edition  2020 « Phase I »'){
  
    this.z=1;
     this.img="http://www.tunisiacarnival.com/wp-content/uploads/2020/02/Affiche-7et8-Mars-scaled.jpg";
  }if (this.myId==' Carnaval de la Tunisie pour la musique universelle   3ème Edition  2020 « Phase II»'){
    
    this.z=1;
    this.img="http://www.tunisiacarnival.com/wp-content/uploads/2020/02/affiche-28-mars-4-avril-scaled.jpg";
  }
  if (this.myId=='premiére edition'){
    
    this.z=null;
    this.vd=1;
     this.vdideo = "http://www.tunisiacarnival.com/wp-content/uploads/2020/02/23448943_151943998757657_8318164613585698816_n.mp4";
     this.titr ="premiére edition";
     this.temps = "8 novembre 2017 - 12 novembre 2017"
  }if (this.myId=='2ème edition el-Mida janvier 2019'){
    console.log("lovze");
    this.z=null;
    this.vd=1;
     this.vdideo = "https://www.facebook.com/MASRALYOUMTUNISIE/videos/276956056278060/";
     this.titr ="2ème edition el-Mida janvier 2019";
     this.temps = "février 19 @ 8 h 00 min - 17 h 00 min"
  }else{
    this.getDataUserzz();
  }
  
  }
  async getDataUser() {
    await this.datajson.getDataUser()
      .subscribe(res => {
        console.log(res);
        this.datauser = res.events;
		
      }, err => {
        console.log(err);
      });
  }

  async getDataUserzz() {
    await this.datajson.getDetails(this.myId)
      .subscribe(res => {
        console.log(res);
        this.datauser = res
        console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Veuillez patienter...',
      duration: 5000
    });
    await loading.present();

  
  }
}
