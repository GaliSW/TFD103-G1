var tl = gsap.timeline();
    tl.to("#ball", {x: -100, y: 600});
    tl.to("#ball", {x: 1100, y: -50, duration: .3, rotation: 360});
    tl.to("#ball", {x: 500, y: 700, duration: .2, rotation: 360});
    tl.to("#ball", {x: 0, y: 0, duration: .2, rotation: 360});
    tl.to("#ball", {x: 1400, y: 300, duration: .5, rotation: 360});
    tl.to("#ball", {x: 600, y: 400, duration: .3, rotation: 360,});
    //震動
    tl.fromTo("#ball", {x: 610, y: 400},{x: 590, y: 400, duration: .2, repeat: 5,});
    //縮小
    tl.to("#ball", {x: 600, y: 400, scale: .5, duration: .5, rotation: -90});
    //放大
    tl.to("#ball", {x: 600, y: 400, scale: 3, duration: .5, opacity: 0});
    //頗半左
    gsap.fromTo('.pokemonTop', {
        x: 0,
        y: 0
    }, {
        x: -200,
        y: 100,
        delay: 4,
        duration: 1,
        rotation: -136,
        opacity: 1
    });

    //頗半右
    gsap.fromTo('.pokemonBottom', {
        x: 0,
        y: 0
    }, {
        x: 200,
        y: 100,
        delay: 4,
        duration: 1,
        rotation: -50,
        opacity: 1
    });

    //角色浮現
    gsap.fromTo('.supRole', {
        x: 0,
        y: 0
    }, {
        y: -130,
        delay: 4,
        duration: 1,
        opacity: 1
    });

    //緞帶
    gsap.to('.surprise', {
        x: 0,
        y: 0,
        delay: 4,
        scale: 1.5,
        duration: 1,
        opacity: 1
    });

    //緞帶
    gsap.fromTo('.surprise', {
        x: 0,
        y: 0
    }, {
        y: 900,
        delay: 4.5,
        duration: 3
    });






//phone
var tl = gsap.timeline();
    tl.to("#ballPhone", {x: 0, y: 500});
    tl.to("#ballPhone", {x: 300, y: 0, duration: .3, rotation: 360});
    tl.to("#ballPhone", {x: 250, y: 600, duration: .2, rotation: 360});
    tl.to("#ballPhone", {x: 0, y: 100, duration: .2, rotation: 360});
    tl.to("#ballPhone", {x: 300, y: 400, duration: .5, rotation: 360});
    tl.to("#ballPhone", {x: 160, y: 400, duration: .3, rotation: 360,});
    //震動
    tl.fromTo("#ballPhone", {x: 170, y: 400},{x: 150, y: 400, duration: .2, repeat: 5});
    //縮小
    tl.to("#ballPhone", {x: 160, y: 400, scale: .5, duration: .5, rotation: -90});
    //放大
    tl.to("#ballPhone", {x: 160, y: 400, scale: 3, duration: .5, opacity: 0});
    //頗半左
    gsap.fromTo('.pokemonTopPhone', {
        x: 0,
        y: 0
    }, {
        x: -100,
        y: 100,
        delay: 3.5,
        duration: 1,
        rotation: -136,
        opacity: 1
    });

    //頗半右
    gsap.fromTo('.pokemonBottomPhone', {
        x: -40,
        y: 0
    }, {
        x: 80,
        y: 100,
        delay: 3.5,
        duration: 1,
        rotation: -50,
        opacity: 1
    });

    //角色浮現
    gsap.fromTo('.supRolePhone', {
        x: -40,
        y: 0
    }, {
        x: -40,
        y: -60,
        delay: 3.6,
        duration: 1,
        opacity: 1
    });

    //緞帶
    gsap.to('.surprisePhone', {
        x: -50,
        y: 0,
        delay: 3.6,
        scale: 1.5,
        duration: 1,
        opacity: 1
    });

    //緞帶
    gsap.fromTo('.surprisePhone', {
        x: -50,
        y: 0
    }, {
        y: 900,
        delay: 4.2,
        duration: 3
    });