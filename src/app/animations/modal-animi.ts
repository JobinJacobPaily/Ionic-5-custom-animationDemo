import {Animation,AnimationController} from '@ionic/Angular'
const animi = new AnimationController();

export const one = (baseEl :any) =>{

  console.log('baseEl:',baseEl);
//  console.log('opots:',opts);

  
    const backdropAnimation = animi.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

       const wrapperAnimation = animi.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]); 

      return animi.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(300)
        .addAnimation([backdropAnimation,wrapperAnimation]); 
        return null;
}

export const two = (baseEl:HTMLElement) =>{

  console.log('leaving animi : ',baseEl)
    return one(baseEl).direction('reverse');
}