
// Detect devices
var classNames = [];
if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('device-ios');
if (navigator.userAgent.match(/android/i)) classNames.push('device-android');

var html = document.getElementsByTagName('html')[0];

if (classNames.length) classNames.push('on-device');
if (html.classList) html.classList.add.apply(html.classList, classNames);

// Detect scroll to start the video
var alreadyPlayed = false;

var video = document.getElementById('moji-video');
video.addEventListener('loadeddata', enableVideoOnScoll(), false);

function enableVideoOnScoll() {
  $(window).scroll(function (event) {
    if (alreadyPlayed) return true;

    var scroll = $(window).scrollTop();
    var videoIsVisible = $('#moji-video').visible(true);

    // Check if even a small part of the video is visible, then start playing
    if (videoIsVisible) {
      alreadyPlayed = true;
      video.play();
    }
  });
}

// Manually trigger the video play for Android only
$('.second-section .play-icon').on('click', function() {
  $(this).hide();
  video.play();
});

// Cycle mojis with constant starting point
var $leftCarousel = $('#carousel-left');
var $topCarousel = $('#carousel-top');
var $bottomCarousel = $('#carousel-bottom');

setInterval(cycleCarousels, 2000);

function cycleCarousels() {
  $leftCarousel.carousel('next');
  setTimeout(function() { $topCarousel.carousel('next') }, 300);
  setTimeout(function() { $bottomCarousel.carousel('next') }, 600);
}
