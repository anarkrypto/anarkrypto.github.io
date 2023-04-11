function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init(){

    // enable avatar fade in transition
    $(".avatar").css("opacity", "1");

    await sleep(1000)
    $("nav h1, nav p").css("opacity", "1");


    let ii = 1

    $('nav a').each(async function () {
        ii++
        await sleep(400 * ii)
        $(this).css("opacity", "1")
    })

    let i = 1

    $('.social li, .social div').each(async function () {
        i++
        await sleep(400 * i)
        $(this).css("opacity", "1")
    })
}

$(document).ready(function () {
    init()
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
