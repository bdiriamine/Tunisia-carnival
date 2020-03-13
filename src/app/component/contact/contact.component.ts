
import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Router } from '@angular/router';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  status:any='up';
  constructor(private callNumber: CallNumber,private emailComposer: EmailComposer,private route: Router) { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.status=ev.detail.value;}
    callme(){
      this.callNumber.callNumber("0021697295952", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
  gotomap(){
    window.open("https://www.google.com/maps/place/56+Rue+d'Iran,+Tunis+1002/@36.8039137,10.167688,14z/data=!4m13!1m7!3m6!1s0x12fd34633bda1d05:0x717b0cc16d8859c4!2s56+Rue+d'Iran,+Tunis+1002!3b1!8m2!3d36.8134304!4d10.1824542!3m4!1s0x12fd34633bda1d05:0x717b0cc16d8859c4!8m2!3d36.8134304!4d10.1824542?hl=fr-FR");
  }
  sendmsg(){
    let email = {
      to: 'tunisiacarnival2018@gmail.com',
      subject: 'Help',
      body: 'help me',
      isHtml: true
    }
    this.emailComposer.open(email);
  }

  openinsta(){
    window.open("https://www.instagram.com/tunisiacarnival/");
  }
  openfb(){
    window.open('https://www.facebook.com/Spring.M.U');
  }
  opeyout(){
    window.open('https://www.youtube.com/channel/UCjOe5h9sUE0q91E2OHtz9QA');
  }
  opentwitter(){
    window.open('https://twitter.com/AbdelfatehIdou1');
  }
}
