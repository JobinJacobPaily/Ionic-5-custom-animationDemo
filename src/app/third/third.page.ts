import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  constructor(
    public router:Router,
  ) { }

  ngOnInit() {
  }

  second()
  {
    this.router.navigate(['second']);
  }

}
