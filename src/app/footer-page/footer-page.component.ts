import { Component } from '@angular/core';
import { CarouselPageComponent } from "../carousel-page/carousel-page.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer-page',
  imports: [CarouselPageComponent, NgFor],
  templateUrl: './footer-page.component.html',
  styleUrl: './footer-page.component.css'
})
export class FooterPageComponent {

}
