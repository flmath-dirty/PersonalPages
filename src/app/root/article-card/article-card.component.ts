import { Component, OnInit } from '@angular/core';
import { ArticleCard } from './article-card';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  constructor() { }
  articleCard = ArticleCard;
  ngOnInit() {
  }

}
