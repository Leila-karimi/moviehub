import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { AppComponent }            from  './app.component';
import { HomeComponent }            from  './components/home/home.component';
import { ApimoviesComponent }            from  './components/apimovies/apimovies.component';
export const routes: Routes = [
 { path: '', 
        redirectTo: 'home', 
        pathMatch: 'full',},
  { path: '**', component: HomeComponent },
  { path: 'apimovies',  component: ApimoviesComponent}
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
