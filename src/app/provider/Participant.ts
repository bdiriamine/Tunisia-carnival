import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class Participant {
participants:any;
  constructor() { 
    this.participants =[{
      id:0,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2018/08/turky.png" ,
      titre :"FDO ART GROUP",
      youtubevideo:"TXeDkRz7zGA",
      videobol:1,
    },
    {id:1,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2019/12/majourette.jpg" ,
      titre :"Troupe la Majorette",
      youtubevideo:"Mrlq2dvUFkI",
      videobol:1,
    },
    {id:2,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2020/02/65628967_2391144044276663_8901990972808757248_n.jpg" ,
      titre :"Troupe Arabesque",
      videobol:null,
    },
    {id:3,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2020/02/84622319_2932857460111120_1859702718700978176_n.jpg" ,
      titre :"troupe hanine",
      videobol:null,
      
    },
    {id:4,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2020/02/20229825_744657389068450_2418256106824351516_o.jpg" ,
      titre :"Troupe Ifriga",
      videobol:1,
      youtubevideo:"RdyqqThQYu8"
    },
    {id:5,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2020/02/download-1-1.jpeg" ,
      titre :"مجموعة الاغواط الجزائرية",
      youtubevideo:"TXeDkRz7zGA",
      videobol:1,
    }, {id:6,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2020/02/val-akragas-2.jpg" ,
      videobol:1,
      titre :"val d’akragas",
      youtubevideo:"6n068PQfqkg"
    }, {id:7,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2020/02/download.jpeg" ,
      videobol:1,
      titre :"مجموعة سهر الليالي الاستعراضية",
      youtubevideo:"8-M006XnU9g"
    }, {id:8,
      imgurl: "http://www.tunisiacarnival.com/wp-content/uploads/2020/02/85028852_628901601014848_2407936525028294656_n-300x200.jpg" ,
      videobol:null,
      titre :"مجموعة االسرايا الحمراء للتراث الليبي",
      
    },
  ];
   }
  


}