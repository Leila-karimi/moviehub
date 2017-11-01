import { Component } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router'

@Component({ 
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Movie Hub';
  
 constructor( private router: Router) { }
}
