import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // @Output() pageChanged = new EventEmitter<string>();
  // @Input() currentTab: string;


  // use 2 way binding
  @Input() currentTab: string;
  @Output() currentTabChange = new EventEmitter<string>();

  tabs: string[] = [
    'about',
    'gallery',
    'play-room',
    'gift-card'
  ]

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
