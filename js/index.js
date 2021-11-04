// gsap
    
let tl = gsap.timeline({
            repeat: -1
        });

gsap.to('.box', { 
    x: 150, 
    y: 130, 
    duration: 2, 
    rotation: 65
})
gsap.to('.text', {
    delay: 1, 
    opacity: 1
})
gsap.to('.roleCar', { 
    x: -80, 
    delay: 1.5, 
    duration: .5, 
    ease: "bounce", 
    scale: 1.5, 
    opacity: 1
})

gsap.to('.meteor',{
    x: -500,
    y: 300,
    duration: .5,
    delay: 5,
    opacity: 1,
    // repeat: -1
})
gsap.to('.logoImg', {
    scale: 1.5, 
    delay: 2, 
    duration: 1,
    opacity: 1 
})
gsap.from('.logoImg', {
    scale: 1, 
    delay:2.5, 
    duration: 2
})
gsap.fromTo('.car01', {
    x: -200
}, {
    x: 1950,
    duration: 25, 
    repeat: -1
});
gsap.fromTo('.car02', {
    x: -200
}, {
    x: 1950,
    delay: 2,
    duration: 10, 
    repeat: -1
});
gsap.fromTo('.car03', {
    x: -200
}, {
    x: 1950,
    delay: 4,
    duration: 15, 
    repeat: -1
});
gsap.fromTo('.car04', {
    x: -200
}, {
    x: 1950,
    delay: 8,
    duration: 25, 
    repeat: -1
});
gsap.fromTo('.car05', {
    x: -200
}, {
    x: 1950,
    delay: 16,
    duration: 30, 
    repeat: -1
});

gsap.to('.textBox', {
    delay: 5,
    duration: 2, 
    ease: "bounce", 
    repeat: -1,
    scale: 1.5
})

gsap.to('.effect', {
    rotation: 360,
    duration: 50,
    repeat: -1
})


gsap.registerPlugin(ScrollTrigger);
gsap.to('.rolesR', {
    scrollTrigger: {
        trigger: '.rolesR',
        toggleActions: 'restart pause reverse pause'
    },
    keyframes: [
        { x: -20, duration: 1, delay: .5},
        { x: 500, duration: 1 },
        { x: 20, duration: 1 }
    ]
})
gsap.to('.rolesL', {
    scrollTrigger: {
        trigger: '.rolesL',
        toggleActions: 'restart pause reverse pause'
    },
    keyframes: [
        { x: 20, duration: 1, delay: .5, scale: 1.2},
        { x: -500, duration: 1 },
        { x: -20, duration: 1, scale: 1}
    ]
})

gsap.registerPlugin(ScrollTrigger);
gsap.to('.roleDance', {
    scrollTrigger: {
        trigger: '.roleDance',
        toggleActions: 'restart pause reverse pause'
    },
    x: -90,
    rotation: -20,
    duration: 1
})

gsap.utils.toArray(".unlock").forEach(section => {
    let tl = gsap.timeline({
        scrollTrigger: {
        trigger: section,
        start: "center center",
        end: () => "+=" + section.offsetWidth, 
        scrub: true,
        pin: true,
        anticipatePin: 1
        },
        defaults: {ease: "none"}
    });
    tl.fromTo(section.querySelector(".afterImage"), { 
        xPercent: 100, 
        x: 0
    }, {
        xPercent: 0
    })
    .fromTo(section.querySelector(".afterImage img"), {
        xPercent: -100,
        x: 0
    }, {
        xPercent: 0
    }, 0);
});

gsap.to('.mark', {
    rotation: 360,
    duration: 2,
    scale: 1.5,
    repeat: -1
})

// canvas
window.onload = function () {
    function resize() {
        let canvas = document.getElementById('canvas');
        let width = screen.width;
        let context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width,canvas.height);
        if(width >= 768){
            context.clearRect(0,0,canvas.width,canvas.height);
            context.font='bold 120px Tahoma';
            context.strokeStyle='#fff';
            context.shadowColor='#9dff00';
            context.shadowOffsetX=5;
            context.shadowOffsetY=5;
            context.shadowBlur=10;

            context.strokeText('Welcome', 100, 200);
            context.stroke();

            context.strokeText('to', 100, 350);
            context.stroke();
        }else if(width < 768){
            context.clearRect(0,0,canvas.width,canvas.height);
            context.font='bold 80px Tahoma';
            context.strokeStyle='#fff';
            context.shadowColor='#9dff00';
            context.shadowOffsetX=5;
            context.shadowOffsetY=5;
            context.shadowBlur=10;

            context.strokeText('Welcome', 100, 200);
            context.stroke();

            context.strokeText('to', 100, 350);
            context.stroke();
        }else{
            context.clearRect(0,0,canvas.width,canvas.height);
            context.font='bold 80px Tahoma';
            context.strokeStyle='#fff';
            context.shadowColor='#9dff00';
            context.shadowOffsetX=5;
            context.shadowOffsetY=5;
            context.shadowBlur=10;

            context.strokeText('Welcome', 100, 200);
            context.stroke();

            context.strokeText('to', 100, 350);
            context.stroke();
        }
    }
    resize();
    window.addEventListener('resize', resize, false);
}