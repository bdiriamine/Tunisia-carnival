import { Injectable } from '@angular/core';


import { Network } from '@ionic-native/network/ngx'
import { AlertController, } from '@ionic/angular';



export enum ConnectionStatusEnum {
  Online,
  Offline
}
@Injectable({
  providedIn: 'root'
})
export class NetworkProviderService {
  previousStatus;

  constructor(public alertCtrl: AlertController, 
    public network: Network,
    public alertController: AlertController) {
      this.previousStatus = ConnectionStatusEnum.Online;
     }
     public initializeNetworkEvents(): void {
      this.network.onDisconnect().subscribe(() => {
          if (this.previousStatus === ConnectionStatusEnum.Online) {
            this.presentAlert();
          }
          this.previousStatus = ConnectionStatusEnum.Offline;
      });
      this.network.onConnect().subscribe(() => {
          if (this.previousStatus === ConnectionStatusEnum.Offline) {
           
          }
          this.previousStatus = ConnectionStatusEnum.Online;
      });
  }
  async presentAlert() {
   
    const alert = await this.alertController.create({
      header: 'Alerte',
      message: 'Veuillez vérifier votre paramètre internet 😞',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlert2() {
  
    const alert = await this.alertController.create({
      header: 'Alerte',
      message: 'Veuillez vérifier votre paramètre  😞 ',
      buttons: ['OK']
    });

    await alert.present();
  }
}

