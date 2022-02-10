import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yaron';

  currentPage: string = 'home';

  onPageChanged(clickedPage: string){

    this.currentPage = clickedPage;
    console.log(this.currentPage);
  }

}
