import { Component } from '@angular/core';
import { CardsPageComponent } from "../cards-page/cards-page.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-posts-page',
  imports: [CardsPageComponent, NgFor],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
