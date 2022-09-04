$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    dots: false,
    margin: 48,
    loop: true,
  });
});

const videoBtnRef = document.querySelector('#video-btn');
const videoPictureRef = document.querySelector('.video-preview');
const videoContainerRef = document.querySelector('.video');
const videoRef = document.querySelector('.video-object');

// videoBtnRef.addEventListener('click', onVideoBtnClickHandler);
videoContainerRef.addEventListener('click', onVideoClickHandler);

// function onVideoBtnClickHandler() {
//   videoPictureRef.classList.add('none');
//   videoContainerRef.classList.remove('video-overlay');
//   videoBtnRef.classList.add('none');

//   if (videoRef.paused) {
//     videoRef.play();
//   }
// }

function onVideoClickHandler() {
  // videoRef.pause();
  // videoBtnRef.classList.remove('none');
  // videoContainerRef.classList.add('video-overlay');

  if (videoRef.paused) {
    videoPictureRef.classList.add('none');
    videoContainerRef.classList.remove('video-overlay');
    videoBtnRef.classList.add('none');

    videoRef.play();
  } else {
    videoBtnRef.classList.remove('none');
    videoContainerRef.classList.add('video-overlay');
    videoRef.pause();
  }
}
