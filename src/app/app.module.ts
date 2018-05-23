import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FrontPageComponent } from './root/front-page/front-page.component';
import { MainMenuComponent } from './root/main-menu/main-menu.component';
import { ArticlesListComponent } from './root/articles-list/articles-list.component';
import { ArticleCardComponent } from './root/article-card/article-card.component';
import { ResumeComponent } from './root/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    MainMenuComponent,
    ArticlesListComponent,
    ArticleCardComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
