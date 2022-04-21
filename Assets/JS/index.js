$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1080: {
            items: 2
        },
        1081: {
            items: 3
        },
    }
})


function showWalkthrough() {
    var walkthrough = document.getElementById('walkthrough');
    var walkthroughactive = document.getElementById('walkthrough_color');
    var allactive = document.getElementById('all_color');
    var video = document.getElementById('current_video');
    var all = document.getElementById('All');
    var currentactive = document.getElementById('current_color');
    if (walkthrough.style.display === 'none') {
        walkthrough.style.display = 'block';
        all.style.display = 'none';
        walkthroughactive.style.backgroundColor = '#004f83';
        walkthroughactive.style.color = 'white';
        allactive.style.backgroundColor = 'white';
        allactive.style.color = 'black';
        video.style.display = 'none';
        currentactive.style.backgroundColor = 'white';
        currentactive.style.color = 'black';
    }
}

function showAll() {
    var all = document.getElementById('All');
    var walkthrough = document.getElementById('walkthrough');
    var allactive = document.getElementById('all_color');
    var walkthroughactive = document.getElementById('walkthrough_color');
    var video = document.getElementById('current_video');
    var currentactive = document.getElementById('current_color');
    if (all.style.display === 'none') {
        all.style.display = 'block';
        walkthrough.style.display = 'none';
        allactive.style.backgroundColor = '#004f83';
        allactive.style.color = 'white';
        walkthroughactive.style.backgroundColor = 'white';
        walkthroughactive.style.color = 'black';
        video.style.display = 'none';
        currentactive.style.backgroundColor = 'white';
        currentactive.style.color = 'black';
    }
}

function showCurrent() {
    var video = document.getElementById('current_video');
    var all = document.getElementById('All');
    var walkthrough = document.getElementById('walkthrough');
    var currentactive = document.getElementById('current_color');
    var walkthroughactive = document.getElementById('walkthrough_color');
    var allactive = document.getElementById('all_color');
    if (video.style.display === 'none') {
        video.style.display = 'block';
        walkthrough.style.display = 'none';
        all.style.display = 'none';
        currentactive.style.backgroundColor = '#004f83';
        currentactive.style.color = 'white';
        walkthroughactive.style.backgroundColor = 'white';
        walkthroughactive.style.color = 'black';
        allactive.style.backgroundColor = 'white';
        allactive.style.color = 'black'
    }
}