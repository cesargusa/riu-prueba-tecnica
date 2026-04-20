import { Component } from '@angular/core';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { PostsPageComponent } from './posts-page/posts-page.component';


@Component({
  selector: 'app-root',
  imports: [MainBannerComponent, PostsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'riu-prueba-tecnica';
}
