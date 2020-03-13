import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TextIntroductionComponentComponent } from './component/text-introduction-component/text-introduction-component.component';
import { BookingComponent } from './component/booking/booking.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { ContactComponent } from './component/contact/contact.component';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { TroupeComponent } from './component/troupe/troupe.component';
import { EvenementsComponent } from './component/evenements/evenements.component';
import { HttpClientModule} from '@angular/common/http';
import { DataJsonHTTPService } from './provider/data-json-http.service';
import { IonicStorageModule } from '@ionic/storage';
import { EvenementdetailsComponent } from './component/evenementdetails/evenementdetails.component';
import { Network } from '@ionic-native/network/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticipantsComponent } from './component/participants/participants.component';
import { ParticipantsDetailsComponent } from './component/participants-details/participants-details.component';
import { NetworkProviderService } from './provider/network-provider.service';



@NgModule({
  declarations: [AppComponent,TextIntroductionComponentComponent,ParticipantsDetailsComponent,BookingComponent,ArchiveComponent,ContactComponent,TroupeComponent,ParticipantsComponent, EvenementsComponent,EvenementdetailsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule, AppRoutingModule,IonicStorageModule.forRoot(),ReactiveFormsModule,],
  providers: [
    StatusBar,DataJsonHTTPService,FileTransfer,CallNumber,EmailComposer,
    FileOpener,DocumentViewer,File,
    SplashScreen,YoutubeVideoPlayer,DataJsonHTTPService,Network,NetworkProviderService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
