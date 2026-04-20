import { Component } from '@angular/core';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';



@Component({
  selector: 'app-root',
  imports: [MainBannerComponent, PostsPageComponent,CardsPageComponent,FooterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'riu-prueba-tecnica';
}
