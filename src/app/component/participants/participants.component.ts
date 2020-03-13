import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/provider/Participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss'],
})
export class ParticipantsComponent implements OnInit {
  parti:any[];
  constructor( private partici : Participant) {

    this.parti=partici.participants;
    console.log(this.parti)
   }

  ngOnInit() {

  }

  
}
