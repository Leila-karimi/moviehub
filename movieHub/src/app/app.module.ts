

import { HttpModule, Http } from '@angular/http';
import { enableProdMode} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule,  }        from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApimoviesComponent } from './components/apimovies/apimovies.component';
import { HomeComponent } from './components/home/home.component'
import { MoviesService } from './services/movies.service'

import { SortPipe } from './components/shared/sort.pipe'
import { GroupByPipe } from './components/shared/groupby.pipe';
export const routes: Routes = [

  { path: 'apimovies',  component: ApimoviesComponent},
 { path: '', 
        redirectTo: 'home', 
        pathMatch: 'full',},
  { path: '**', component: HomeComponent },
  
];
@NgModule({
  imports: [
    BrowserModule,    
    CommonModule,
    ReactiveFormsModule,
    HttpModule, 
    RouterModule.forRoot(routes  //,  { enableTracing: true } <-- debugging purposes only
    ) 
  ],
  declarations: [    
    AppComponent,
    HomeComponent,
    ApimoviesComponent,
    SortPipe,
    GroupByPipe
  ],
  providers: [
    MoviesService
  ],
  exports:[
    RouterModule,
    SortPipe,
    GroupByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
