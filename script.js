const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .2,
    y:10,
    duration: 1,
    ease: Power3,
    opacity:0,
})

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2",{
    y:50,
    stagger:.3,
    opacity:0,
    ease: Expo,
    duration:1
  })

  Shery.imageEffect("#imagentext img",{
    style: 3,
    config: {"uFrequencyX":{"value":37.19,"range":[0,100]},"uFrequencyY":{"value":52.07,"range":[0,100]},"uFrequencyZ":{"value":17.36,"range":[0,100]},"geoVertex":{"range":[1,64],"value":26.51},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500101687960473},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.63,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
    
  })

  Shery.imageEffect(".imgff img",{
    style:5,
    config: {"a":{"value":3.72,"range":[0,30]},"b":{"value":0.01,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

  })
  
  gsap.from("#imagentext img",{
    y:"70",
    opacity:0,
    duration:2,
    ease: Expo.easeInOut
  })
  Shery.imageEffect("#bimg ",{
    style:5,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8164975372702723},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4.93,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey: true,
    
  })

  document.querySelector("#footer button",).addEventListener("mouseover",function(){
   gsap.to("#footer video",{
    opacity:1,
    duration:1.5,
    ease:Power4.easeOut

   })
  })

  document.querySelector("#footer button",).addEventListener("mouseout",function(){
  gsap.to("#footer video",{
    opacity:0,
    duration:1,
    ease: Power4.easeOut

  })
  })