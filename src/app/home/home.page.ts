import { Component, AfterViewInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AnimationController,Animation } from '@ionic/angular'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{
 
  //@ViewChild('customer',{static:true}) customer :ElementRef;
  anim:Animation;
  modalvalue=false;
  
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
   /*  const listanimi =this.animationController.create('animi');
    listanimi.addElement(this.customer.nativeElement)
   .duration(1500)
   .keyframes([
     {offset:0,transform:'translateX(100px)'},
     {offset:.50,transform:'translateX(50px)'},
     {offset: 1 ,transform:'translateX(0px)'}
   ])
   .easing('ease-out')
   .fromTo('opacity',0,1);
   listanimi.play(); */
   
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
