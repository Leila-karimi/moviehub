import {Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Movie } from '../models/movie.model'
import { Character } from '../models/character.model'
 
@Injectable()
export class MoviesService {
     constructor(private _http: Http) { }

    getMovies(): Observable<any[]> {
        return this._http.get( environment.apiUrl)
            .map((response: Response) => {
                return <any[]>response.json()                  
            })
    }
    getMoviesFromLocalApi(): Observable<any[]> {
        return this._http.get( environment.localApiUrl)
            .map((response: Response) => {
                return <any[]>response.json()                  
            })
    }
}