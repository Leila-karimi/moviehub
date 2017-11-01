import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router'

import { MoviesService} from '../../services/movies.service'
import { Movie } from '../../models/movie.model'
import { Character } from '../../models/character.model'
@Component({
  selector: 'app-apimovies',
  templateUrl: './apimovies.component.html',
  styleUrls: ['./apimovies.component.css']
})
export class ApimoviesComponent  implements OnInit {
    movies: any[];

   constructor(private _service: MoviesService, private _router: Router) { }

    ngOnInit(): void {
          console.log('api movies')

        this.getMovies();
    }
    
    getMovies(): void {     

        this._service.getMoviesFromLocalApi().subscribe(data => {
            this.movies = data;
            console.log(this.movies)
        });
    }


}
