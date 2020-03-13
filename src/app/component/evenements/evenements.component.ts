import { Component, OnInit } from '@angular/core';
import { DataJsonHTTPService } from 'src/app/provider/data-json-http.service';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss'],
})
export class EvenementsComponent implements OnInit {
  evenements:any;
  datauser: any;
  constructor(public datajson : DataJsonHTTPService,public model : ModalController,public loadingController: LoadingController) {
    this.presentLoading();
   }

   ngOnInit() {
	  this.getDataUser();
  }
  
  async getDataUser() {
    await this.datajson.getDataUser()
      .subscribe(res => {
       
        this.datauser = res.events;
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