import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx'
import { NetworkProviderService } from './provider/network-provider.service';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = true;
  navigate : any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,private modalCtrl: ModalController,
    private statusBar: StatusBar,
    public networkProvider: NetworkProviderService
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.networkProvider.initializeNetworkEvents();
      this.statusBar.styleDefault();
      this.splashScreen.hide();  // <-- hide static image

      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Accueil",
        url   : "/home",
        icon  : "home"
      },{
        title : "Booking",
        url   : "/booking",
        icon  : "medal"
      },
      {
        title : "Evénements",
        url   : "/evenements",
        icon  : "calendar"
      },
      {
        title : "Participants",
        url   : "/participant",
        icon  : "musical-notes"
      },
    
      {
        title : "Archive",
        url   : "/archive",
        icon  : "document-text"
       
      },
      {
        title : "Contact",
        url   : "/contact",
        icon  : "people-circle"
      },
     
    ]
  }
}
