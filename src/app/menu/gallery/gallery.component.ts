import { Component, OnInit } from '@angular/core';
import { GalleryImage } from './gallery-image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  relativePath: string = '../assets/images/gallery/'
  
  // should receive from DB??
  // change fonts
  images: GalleryImage[] = [
    {name: 'מטוס', path:'_DN17698+.jpg'},
    {name: 'מוטו גריידר', path:'_DN17731+.jpg'},
    {name: 'אליקופטר', path:'_DN17721+.jpg'},
    {name: 'משאית מרצדס', path:'_DN17746+.jpg'},
    {name: 'מטוס', path:'_DN17698+.jpg'},
    {name: 'מוטו גריידר', path:'_DN17731+.jpg'},
    {name: 'הליקופטר', path:'_DN17721+.jpg'},
    {name: 'משאית מרצדס', path:'_DN17746+.jpg'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
