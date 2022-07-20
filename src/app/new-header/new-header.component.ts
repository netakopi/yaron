import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css']
})
export class NewHeaderComponent implements OnInit {

  private currentTab: string;

  tabs: string[] = [
    'about',
    'gallery',
    'play-room',
    'gift-card'
  ]

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)) //the filter doesnt wrriten as a callback, why suold use the pipe if the events allready return Observable
      .subscribe((event: NavigationEnd) => { this.currentTab = event.url.replace("/", "") }) //find different method to adjust url
  }

  ngOnInit(): void {
  }

}
