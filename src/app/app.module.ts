import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './menu/gallery/gallery.component';
import { AboutComponent } from './menu/about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PlayRoomComponent } from './menu/play-room/play-room.component';
import { GiftCardComponent } from './menu/gift-card/gift-card.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewHeaderComponent } from './new-header/new-header.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GalleryComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    PlayRoomComponent,
    GiftCardComponent,
    FooterComponent,
    NewHeaderComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
