import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
booking:any;

  constructor( private route:Router,private youtube: YoutubeVideoPlayer,) { 
    this.booking=[ {
      id:0,
      img:"http://www.tunisiacarnival.com/wp-content/uploads/2018/08/Hammement-x-1050x662-1024x646.jpg",
      Titre : "Hammamet-Nabeul",
      description:"une ville tunisienne située au nord-est, sur la côte sud-est du cap Bon, à une soixantaine de kilomètres au sud de Tunis.",
      boki:'http://eventstour.net/en/hotel?location_id=9'
    },{
      id:1,
      img:"http://www.tunisiacarnival.com/wp-content/uploads/2020/02/tabarka-ain-drahem.jpg",
      Titre : "Tabarka-Ain Drahem",
      description:"Tabarka est une ville côtière du Nord-Ouest de la Tunisie située à une centaine de kilomètres de Tunis et à quelques kilomètres de la frontière algéro-tunisienne. Son nom est étymologiquement d’origine berbère et signifierait « pays des bruyères » ou peut-être du gênois Tua barca",
      boki:"http://eventstour.net/en/hotel?location_id=13"
    },
    {
      id:2,
      img:"http://www.tunisiacarnival.com/wp-content/uploads/2018/08/Ave_Habib_Bourguiba_Tunis.jpg",
      Titre : "Tunis-Bizerte",
      description:"Bizerte ou Banzart est une ville du nord de la Tunisie située entre la mer Méditerranée et le lac de Bizerte. Elle est le chef-lieu d’un gouvernorat peuplé de plus d’un demi-million d’habitants. La ville compte 136 917 habitants en 2014",
      boki:"http://eventstour.net/en/hotel?location_id=10"
    },
    {
      id:3,
      img:"http://www.tunisiacarnival.com/wp-content/uploads/2018/08/sousse.jpg",
      Titre : "Sousse-Monastir",
      description:"est une ville portuaire de l’est de la Tunisie, située à 143 kilomètres au sud de Tunis, et ouverte sur le golfe d’Hammamet (mer Méditerranée).",
      boki:"https://www.booking.com/searchresults.fr.html?aid=1589683;checkin_monthday=27;checkin_year_month=2018-10;checkout_monthday=4;checkout_year_month=2018-11;class_interval=1;dest_id=-722356;dest_type=city;do_availability_check=1;dtdisc=0;errorc_checkin_date_in_the_past=checkin_daysfromnow;errorc_checkin_date_in_the_past=checkin_year;errorc_checkin_date_in_the_past=checkin_month;errorc_checkin_date_in_the_past=checkin_monthday;errorc_checkin_date_in_the_past=checkin_yearday;errorc_checkin_date_in_the_past=checkin_week;errorc_checkin_date_in_the_past=checkin_year_month;errorc_checkin_date_in_the_past=checkin_year_week;errorc_checkin_date_in_the_past=checkin;errorc_checkin_date_in_the_past=checkin_year_month_monthday;errorc_checkin_date_in_the_past=checkin_year_yearday;errorc_checkin_date_in_the_past=dealspage_original_checkin_date;inac=0;index_postcard=0;label=wp-searchbox-widget-1589683;label_click=undef;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;si=ai%2Cco%2Cci%2Cre%2Cdi;sid=96dfd88fd5f5495b8a9ece9afb1a9d74;ss=hammamet;ss_all=0;ssb=empty;sshis=0"
    
    },
    {
      id:4,
      img:"http://www.tunisiacarnival.com/wp-content/uploads/2019/03/Touzeur.jpg",
      Titre : "Tozeur",
      description:"Tozeur",
      boki:'http://eventstour.net/en/hotel?location_id=11'
    },
    {
      id:5,
      img:"http://www.tunisiacarnival.com/wp-content/uploads/2019/03/Djerba.jpg",
      Titre : "Djerba-Zarzis",
      description:"L’île Djerba est l’une des destinations touristiques les plus prisées de la Tunisie.",
      boki:"http://eventstour.net/en/hotel?location_id=14"
    }
   ]
  }
  gotobooking(url){
    window.open(url,'_system', 'location=yes');
  }
  ngOnInit() {}
  openMyVideo(id){
    this.youtube.openVideo(id);
  }
}
