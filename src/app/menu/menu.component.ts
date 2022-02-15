import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private currentTab: string;

  tabs: string[] = [
    'about',
    'gallery',
    'play-room',
    'gift-card'
  ]

  constructor( private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)) //the filter doesnt wrriten as a callback, why suold use the pipe if the events allready return Observable
    .subscribe((event: NavigationEnd)=> {this.currentTab = event.url.replace("/", "")}) //find different method to adjust url
   }

  ngOnInit(): void {
  }

}
