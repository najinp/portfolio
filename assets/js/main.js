


$(function () {
    var TXT = ['HOME', 'heath', 'cartier', 'bizun', 'mille', 'beyond', 'najins Poftpolio']
    //fullpage
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'page07'],
        // navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            setTimeout(() => {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);
            // $('.this_bg').css({
            //     backgroundPositionY: - 100 * (num - 1) + "px"
            // });
            // $('.this_pic img').attr({ scr: `./assets/img/lesedilarona0${num}.jpg` });
            // $('.this_tp').css({
            //     bacgroundI-mage: `./assets/img/lesedilarona0${num}.jpg`
        },
    });

    $('.slide').on('wheel', function (e) {
        console.log(e.originalEvent.wheelDelta);
        if (e.originalEvent.wheelDelta > 0 && $(this).index() > 0) {
            $.fn.fullpage.moveSlideLeft();
        }
        if (e.originalEvent.wheelDelta < 0 && $(this).index() < 2) {
            $.fn.fullpage.moveSlideRight()
        }
    })

})

// //learn how this was made at https://www.youtube.com/watch?v=ersN5fk8py0
// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

// gsap.defaults({ ease: "none" });

// const pulses = gsap.timeline({
//     defaults: {
//         scale: 2,
//         autoAlpha: 1,
//         transformOrigin: 'center',
//         ease: "elastic(2.5, 1)"
//     }
// })
//     .to(".ball02, .text01", {}, 0.84)
//     .to(".ball03, .text02", {}, 1.36)
//     .to(".ball04, .text03", {}, 1.92)

// const main = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#svg",
//         scrub: true,
//         start: "top center",
//         end: "bottom center"
//     }
// })
//     .to(".ball01", { autoAlpha: 1, duration: 0.05 })
//     .from(".theLine", { drawSVG: 0, duration: 4 }, 0)
//     .to(".ball01", {
//         motionPath: {
//             path: ".theLine",
//             align: ".theLine",
//             alignOrigin: [0.5, 0.5],
//         }, duration: 4
//     }, 0)
//     .add(pulses, 0)

