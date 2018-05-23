import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './root/articles-list/articles-list.component';
import { ResumeComponent } from './root/resume/resume.component';

const appRoutes: Routes = [
    { path: 'articles', component: ArticlesListComponent },
    { path: 'resume', component: ResumeComponent },
    { path: '', redirectTo: '/articles', pathMatch: 'full' }
/**     { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)    
    ],
    exports: [
        RouterModule    
    ]
})

export class AppRoutingModule { }