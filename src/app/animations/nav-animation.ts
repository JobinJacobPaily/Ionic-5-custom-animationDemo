import{ AnimationController,Animation} from '@ionic/angular'



export const enterAnimation = (baseEl :HTMLElement,opts?:any):Animation =>{

    console.log('baseEl :',baseEl);
    console.log('opts : ' ,opts);

    const animi = new AnimationController();
     if(opts.direction === 'forward')
     {
        const rootanimi =  animi.create()
        .addElement(opts.enteringEl)
        .duration(250)
        .keyframes([
           { offset : 0 , transform:'translateY(200px)'},
           {offset : .5 , transform : 'translateY(100px)'},
           {offset : 1 , transform : 'translateY(0px)'}
          ])
        .easing('ease-in')
        .fromTo('opacity',0,1);

        const leavinganimi =  animi.create()
        .addElement(opts.leavingEl)
        .duration(250)
        .keyframes([
           { offset : 0 , transform:'translateX(0px)'},
           {offset : .5 , transform : 'translateX(100px)'},
           {offset : 1 , transform : 'translateX(200px)'}
          ])
        .easing('ease-out')
        .fromTo('opacity',1,0);

        return animi.create().addAnimation([rootanimi,leavinganimi]);
       /*  return animi.create()
        .addElement(opts.enteringEl)
        .duration(500)
        .keyframes([
            { offset : 0 , transform:'translateY(200px)'},
            {offset : .5 , transform : 'translateY(100px)'},
            {offset : 1 , transform : 'translateY(0px)'}
           ])
        .easing('ease-in')
        .fromTo('opacity',0,1); */
     }
     else
     {
         const rootanimi =  animi.create()
         .addElement(opts.enteringEl)
         .duration(250)
         .keyframes([
            { offset : 0 , transform:'translateX(200px)'},
            {offset : .5 , transform : 'translateX(100px)'},
            {offset : 1 , transform : 'translateX(0px)'}
           ])
         .easing('ease-in')
         .fromTo('opacity',0,1);

         const leavinganimi =  animi.create()
         .addElement(opts.leavingEl)
         .duration(250)
         .keyframes([
            { offset : 0 , transform:'translateY(0px)'},
            {offset : .5 , transform : 'translateY(100px)'},
            {offset : 1 , transform : 'translateY(200px)'}
           ])
         .easing('ease-out')
         .fromTo('opacity',1,0);

         return animi.create().addAnimation([rootanimi,leavinganimi]);
     }
    return null
}