import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './menu/about/about.component';
import { GalleryComponent } from './menu/gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PlayRoomComponent } from './menu/play-room/play-room.component';
import { GiftCardComponent } from './menu/gift-card/gift-card.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent},
  { path: 'play-room', component: PlayRoomComponent},
  { path: 'gift-card', component: GiftCardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  declarations: [], // doesnt contain any component
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
