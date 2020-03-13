import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TextIntroductionComponentComponent } from './component/text-introduction-component/text-introduction-component.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { BookingComponent } from './component/booking/booking.component';
import { ContactComponent } from './component/contact/contact.component';
import { TroupeComponent } from './component/troupe/troupe.component';
import { EvenementsComponent } from './component/evenements/evenements.component';
import { EvenementdetailsComponent } from './component/evenementdetails/evenementdetails.component';
import { ParticipantsComponent } from './component/participants/participants.component';
import { ParticipantsDetailsComponent } from './component/participants-details/participants-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path:'introduction', component:TextIntroductionComponentComponent},
  {path:'archive', component:ArchiveComponent},
  {path:'booking', component:BookingComponent},
  {path:'contact', component:ContactComponent},
  {path:'participant', component:ParticipantsComponent},
  {path:'participant/:myid', component:ParticipantsDetailsComponent},
  {path:'evenements', component:EvenementsComponent},
  {path:'details/:myid', component:EvenementdetailsComponent},
  {path:'troupe/:myid', component:TroupeComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
