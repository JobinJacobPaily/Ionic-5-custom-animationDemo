import{ AnimationController,Animation} from '@ionic/angular'



export const enterAnimation = (baseEl :HTMLElement,opts?:any):Animation =>{

    console.log('baseEl :',baseEl);
    console.log('opts : ' ,opts);

    const animi = new AnimationController();
     if(opts.direction === 'forward')
     {
        return animi.create()
        .addElement(opts.enteringEl)
        .duration(1500)
        .easing('ease-in')
        .fromTo('opacity',0,1);
     }
     else
     {
         const rootanimi =  animi.create()
         .addElement(opts.enteringEl)
         .duration(1500)
         .easing('ease-in')
         .fromTo('opacity',0,1);

         const leavinganimi =  animi.create()
         .addElement(opts.enteringEl)
         .duration(1500)
         .easing('ease-out')
         .fromTo('opacity',1,0);

         return animi.create().addAnimation([rootanimi,leavinganimi]);
     }
    return null
}