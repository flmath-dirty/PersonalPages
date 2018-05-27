import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { ArticleCard } from '../article-card/article-card';
import { ArticlesFilterPipe } from './articles-filter.pipe';
import { ArticlesService } from './articles.service';

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.css'],
    providers: [ArticlesService]
})
export class ArticlesListComponent implements OnInit {

    articleCards: ArticleCard[];
    filterRegex: string = '';

    onEnter(value: string) {
	this.filterRegex = value; }
    constructor(private articlesService: ArticlesService) { }

    getArticles(): void {
	this.articlesService.getArticles().then(
	    articles => this.articleCards=articles);}

    ngOnInit() {
	this.getArticles();
    }
    
}
