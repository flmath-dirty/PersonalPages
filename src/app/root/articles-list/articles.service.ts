import { Injectable } from '@angular/core';
import { ArticleCard } from '../article-card/article-card';
import { Articles } from '../../data/data-article-cards';

@Injectable()
export class ArticlesService {

  constructor() { }
 getArticles(): Promise<ArticleCard[]>{
 return Promise.resolve(Articles);}
}
