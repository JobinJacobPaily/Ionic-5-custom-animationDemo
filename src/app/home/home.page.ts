import { Component, AfterViewInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AnimationController,Animation } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  anim:Animation;

  @ViewChild('sqaure',{static:true}) square :ElementRef;

  constructor(
    public animationController :  AnimationController,
    public router : Router,
  ) {
   
  }
   ngAfterViewInit() {

   
    this.anim = this.animationController.create('animi'); 
    this.anim.addElement(this.square.nativeElement)
    .duration(2000)
    .iterations(Infinity)
    .keyframes([
     { offset : 0 , transform:'translateY(0px)'},
     { offset : .25 , transform:'translateY(100px) translateX(100px)'},
     { offset : .50 , transform:'translateY(200px) translateX(0px)'},
     { offset : .75 , transform:'translateY(100px) translateX(-100px)'},
     { offset : 1 , transform:'translateY(0px)'},
    ]);
    this.anim.play();
   
  } 
  stop()
   {
     this.anim.stop();
   }
   start()
   {
    this.anim.play();
   }
   second()
   {
     this.router.navigate(['/second']);
   }



}
