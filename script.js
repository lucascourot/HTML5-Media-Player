var playLink = document.querySelector('form#media-player input[type=submit]');
var videoUrl = document.querySelector('form#media-player input[type=url]');
var video    = document.querySelector('form#media-player video');

var loadVideo = function(event) {
    event.preventDefault();

    video.setAttribute('src', videoUrl.value);
    video.play();
};

playLink.addEventListener('click', loadVideo);
