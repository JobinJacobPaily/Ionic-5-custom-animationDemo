import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  customersListDB = [
 
    {'index':0,'customer':'soman','balance':1200},
    {'index':1,'customer':'soman','balance':1200},
    {'index':2,'customer':'soman','balance':1200},
    {'index':3,'customer':'soman','balance':1200},
    {'index':4,'customer':'soman','balance':1200},
    {'index':5,'customer':'soman','balance':1200},
    {'index':6,'customer':'soman','balance':1200},
    {'index':7,'customer':'soman','balance':1200},
    { 'index':8,'customer':'soman','balance':1200},
    {'index':9,'customer':'soman','balance':1200},
    {'index':10,'customer':'soman','balance':1200},
    {'index':11,'customer':'soman','balance':1200},
    {'index':0,'customer':'soman','balance':1200},
    {'index':1,'customer':'soman','balance':1200},
    {'index':2,'customer':'soman','balance':1200},
    {'index':3,'customer':'soman','balance':1200},
    {'index':4,'customer':'soman','balance':1200},
    {'index':5,'customer':'soman','balance':1200},
    {'index':6,'customer':'soman','balance':1200},
    {'index':7,'customer':'soman','balance':1200},
    { 'index':8,'customer':'soman','balance':1200},
    {'index':9,'customer':'soman','balance':1200},
    {'index':10,'customer':'soman','balance':1200},
    {'index':11,'customer':'soman','balance':1200},
    {'index':0,'customer':'soman','balance':1200},
    {'index':1,'customer':'soman','balance':1200},
    {'index':2,'customer':'soman','balance':1200},
    {'index':3,'customer':'soman','balance':1200},
    {'index':4,'customer':'soman','balance':1200},
    {'index':5,'customer':'soman','balance':1200},
    {'index':6,'customer':'soman','balance':1200},
    {'index':7,'customer':'soman','balance':1200},
    { 'index':8,'customer':'soman','balance':1200},
    {'index':9,'customer':'soman','balance':1200},
    {'index':10,'customer':'soman','balance':1200},
    {'index':11,'customer':'soman','balance':1200},
    {'index':0,'customer':'soman','balance':1200},
    {'index':1,'customer':'soman','balance':1200},
    {'index':2,'customer':'soman','balance':1200},
    {'index':3,'customer':'soman','balance':1200},
    {'index':4,'customer':'soman','balance':1200},
    {'index':5,'customer':'soman','balance':1200},
    {'index':6,'customer':'soman','balance':1200},
    {'index':7,'customer':'soman','balance':1200},
    { 'index':8,'customer':'soman','balance':1200},
    {'index':9,'customer':'soman','balance':1200},
    {'index':10,'customer':'soman','balance':1200},
    {'index':11,'customer':'soman','balance':1200}
  ]

  constructor(
    public sanitizer:DomSanitizer,
    public router:Router
  ) { }

  ngOnInit() {
  }
home()
{
  this.router.navigate(['home']);
}
third()
{
  this.router.navigate(['third']);
}
}
