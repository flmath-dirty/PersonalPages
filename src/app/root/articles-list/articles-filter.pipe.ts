import { Pipe, PipeTransform } from '@angular/core';
import { ArticleCard } from '../article-card/article-card';

@Pipe({
    name: 'articlesFilter'
})
export class ArticlesFilterPipe implements PipeTransform {

    transform(articles: ArticleCard[], pattern: any): ArticleCard[] {

	if(!articles) return [];
	if(!pattern) return articles;
	let regexp = new RegExp(pattern.toLowerCase());
	let isRegexMatch = this.isRegexMatchFun(regexp);
	return articles.filter(isRegexMatch);

    }
    
    isRegexMatchFun(regexp : any): any{
	return function(article, index, array) {
	    // console.log(article.name);
	    // console.log(regexp.test(article.name.toLowerCase()));
	    let isRegexpInName: boolean = regexp.test(article.name.toLowerCase());
	    let isRegexpInTags: boolean = regexp.test(article.tags.toLowerCase());
	    return (isRegexpInName || isRegexpInTags);
	} 
	
    }
}
