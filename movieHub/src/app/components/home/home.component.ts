import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('home')
  }

}
