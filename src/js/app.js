import {TimelineMax} from 'gsap';
import './lib/customease';

$('body').on('click',() => {
  let tl = new TimelineMax();
  let tl1  = new TimelineMax();


  tl.fromTo('.samoletik',1,{
	  x:0
  },{
	  x:800
  });

  tl.fromTo(tl,0.5,{timeScale:0.01},{timeScale:1},0);
});


