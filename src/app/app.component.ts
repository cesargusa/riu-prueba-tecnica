import { Component } from '@angular/core';
import { MainBannerComponent } from './main-banner/main-banner.component';

@Component({
  selector: 'app-root',
  imports: [MainBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'riu-prueba-tecnica';
}
