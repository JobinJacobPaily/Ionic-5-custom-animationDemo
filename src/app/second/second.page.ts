import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(
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
