
gsap.to("#home",{
    scrollTrigger: {
     trigger: "#home",
     start: "top top",
     scrub: 3,
     
     end: "bottom 40%"
    },


    opacity: 0,
    ease: Power1,
    duration: 2,
    stagger: 2,
})
gsap.to("#secend img",{
    scrollTrigger: {
     trigger: "#secend",
     start: "top 10%",
     scrub: 1,
     
     end: "center 30%"
    },


    width:"45%",
    ease: Power1,
    duration: 2,
    
})